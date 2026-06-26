import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(
    'pk_test_51TmZsX2HHfSXX08wrDcSRY5lwTJohZfYxdXolUF3vZPmb8SaSUvwbb3PAtjNqmeVEiOKaCBjQfJi43cb9f2DSEJJ00KCoaU4zZ'
);


export default stripePromise;