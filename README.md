![alt text](https://pnguyen-portfolio.vercel.app/detail/desktop/image-audiophile-hero@2x.jpg)

Deployment:https://fem-audiophile.vercel.app/

Audiophile is an e-commerce application selling high-fidelity audio equipment. The aim was to build out a complete e-commerce website with visually rich UI, a smooth cart updating experience, the ability to receive credit/debit card payments and order information in a database. NextJS was chosen as the React framework for its additional API back-end capability.

For the front-end TailwindCSS is used for quick prototyping, easy to implement responsive styling and smooth animations. Redux Toolkit is used for managing the state of the cart, UI elements and form fields. These states are persisted into local storage using Redux Persist, retaining cart information even if the page is refreshed.

For the checkout, the project uses React-Hook-Form with yup for form validation. The user is able to pay by card via Stripe integration or can opt for cash payment at delivery. The form information is then forwarded to a Firestore database for the client to keep track of orders. This is achieved in the backend via NextJS' API Routes, sent directly to Firestore if payment is Cash on Delivery or via webhook if paying through Stripe.

Note:

Stripe Checkout is running test mode only.
Use the dummy credit details for demo:
-Card Number: 4242 4242 4242 4242\n
-MM/YY: 04/24
-CVC: 424


![alt text](https://pnguyen-portfolio.vercel.app/detail/desktop/image-audiophile-preview-1@2x.jpg)
![alt text](https://pnguyen-portfolio.vercel.app/detail/desktop/image-audiophile-preview-2@2x.jpg)
