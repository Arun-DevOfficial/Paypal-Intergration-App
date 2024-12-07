import { XCircle, RefreshCw, LifeBuoy } from "lucide-react";
import {Link} from "react-router-dom";

export default function PaymentResult() {
  // In a real application, you would fetch these details from your backend or state management
  const orderNumber = "ORD-12345";
  const totalAmount = "$49";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <>
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            We are sorry, but there was an issue processing your payment.
          </p>
          <div className="bg-gray-50 rounded p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Order Number:</p>
            <p className="font-semibold text-gray-800 mb-4">{orderNumber}</p>
            <p className="text-sm text-gray-600 mb-2">Total Amount:</p>
            <p className="font-semibold text-gray-800">{totalAmount}</p>
          </div>
          <p className="text-gray-600 mb-8">
            Please try again or contact our support team for assistance.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                /* Implement retry logic */
              }}
              className="w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-300"
            >
              <LifeBuoy className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </>
      </div>
    </div>
  );
}
