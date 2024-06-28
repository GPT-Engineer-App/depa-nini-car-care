import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "@/components/PaymentForm";
const stripePromise = loadStripe("your-publishable-key-here");

const Payment = () => {
  const handleSuccess = () => {
    // Handle post-payment success actions here
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Elements stripe={stripePromise}>
        <PaymentForm amount={5000} onSuccess={handleSuccess} />
      </Elements>
    </div>
  );
};

export default Payment;