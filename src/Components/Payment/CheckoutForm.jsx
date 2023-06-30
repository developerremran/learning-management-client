// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { data } from "autoprefixer";



// const CheckoutForm = ({ totalPrice }) => {
//     const stripe = useStripe()
//     const elements = useElements()
//     const { user } = useContext(AuthContext)

//     const [clientSecret, setClientSecret] = useState("");

//     console.log(totalPrice);
//     // useEffect(() => {
//     //     fetch('/create-payment-intent', { totalPrice })
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             console.log(data.clientSecret);
//     //             setClientSecret(data.clientSecret)
//     //         })

//     // }, [totalPrice])
//     useEffect(() => {
//         const fetchClientSecret = async () => {
//           try {
//             const response = await fetch('/create-payment-intent', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ totalPrice }),
//             });
      
//             if (response.ok) {
//               const data = await response.json();
             
//               setClientSecret(data.clientSecret);
//             } else {
//               // Handle the error response from the server
//             }
//           } catch (error) {
//             // Handle any network or other errors
//           }

//         console.log(data);
//         };
        
      
//         fetchClientSecret();
//       }, [totalPrice]);






//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         const card = elements.getElement(CardElement);

//         if (card == null) {
//             return;
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if (error) {
//             console.log('[error]', error);
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }

    
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     name: user?.displayName || 'unknown',
//                     email: user?.email || 'unknown',
//                 },
//             },
//         });

//         if (confirmError) {
//             console.log('[confirmError]', confirmError);
//         } else {
//             console.log('[PaymentIntent]', paymentIntent);
//         }


//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             />
//             <button type="submit" disabled={!stripe}>
//                 Pay
//             </button>
//         </form>
//     );
// };

// export default CheckoutForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch('/create-payment-intent', { totalPrice })
      .then(res => res.json())
      .then(data => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('[error]', error);
      return;
    }

    console.log('[PaymentMethod]', paymentMethod);

    try {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        `${clientSecret}`,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'unknown',
              email: user?.email || 'unknown',
            },
          },
        }
      );

      if (confirmError) {
        console.log('[confirmError]', confirmError);
      } else {
        console.log('[PaymentIntent]', paymentIntent);
      }
    } catch (error) {
      console.log('[Error]', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <h2 className="text-red-600 mt-10">!You dont pay now Because its just demo</h2>
    </form>
  );
};

export default CheckoutForm;
