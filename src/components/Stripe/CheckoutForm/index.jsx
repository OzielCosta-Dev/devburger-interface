import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  
  // Proteção caso o state venha nulo ao acessar a página diretamente
  const location = useLocation();
  const dpmCheckerLink = location.state?.dpmCheckerLink;

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements com falha, tente novamente");
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      if (error) {
        setMessage(error.message);
        toast.error(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });

        const { status } = await api.post(
          '/orders',
          { products },
          { validateStatus: () => true }
        );

        if (status === 200 || status === 201) {
          toast.success('Pedido realizado com sucesso!');
          clearCart();

          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
          }, 2000);
        } else if (status === 409) {
          toast.error('Falha ao realizar o seu pedido');
        } else {
          throw new Error();
        }
      } else {
        setMessage('Falha ao confirmar o pagamento. Tente novamente.');
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente');
    } finally {
      setIsLoading(false); // Garante que o loading pare sempre
    }
  };

  const paymentElementOptions = {
    layout: "accordion"
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}