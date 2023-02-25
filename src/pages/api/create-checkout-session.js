
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function createCheckoutSession(req, res)  {
  //the req is retieving items and email from the checkout 
  //page 
  const { items, email } = req.body;

  
};