## Getting Started  

### 1. Clone the Repository  

```bash  
git clone <repository-url>  
cd <repository-folder>  
```  

### 2. Install Dependencies  

#### For Backend:  
```bash  
cd backend  
npm install  
```  

#### For Frontend:  
```bash  
cd frontend  
npm install  
```  

---

## Backend Setup (Node.js)  

### 3. Configure Environment Variables  

Create a `.env` file in the `backend` directory and configure the following variables:  

```env  
PAYPAL_CLIENT_ID=<your-paypal-client-id>  
PAYPAL_SECRET=<your-paypal-secret>  
PAYPAL_API_URL=https://api-m.sandbox.paypal.com  
PORT=8000  
```  

### 4. Backend Code Overview  

- **Route: `/create-order`**  
  Creates a new PayPal order and returns the order ID.  

- **Route: `/capture-order/:orderId`**  
  Captures payment for an existing PayPal order.  

### 5. Start the Backend Server  

```bash  
cd backend  
npm start  
```  

---

## Frontend Setup (React.js)  

### 6. Configure PayPal Client  

Update the `frontend/src/config.js` file with your PayPal Client ID:  

```javascript  
export const PAYPAL_CLIENT_ID = "<your-paypal-client-id>";  
```  

### 7. React PayPal Button Integration  

Ensure the `PayPalButtons` component from the `@paypal/react-paypal-js` library is integrated in your application to render the PayPal button.  

**Example:**  

```javascript  
import { PayPalButtons } from "@paypal/react-paypal-js";  

const PayPalComponent = () => {  
  return (  
    <PayPalButtons  
      createOrder={(data, actions) => {  
        return fetch("/create-order", {  
          method: "POST",  
        })  
          .then((res) => res.json())  
          .then((order) => order.id);  
      }}  
      onApprove={(data, actions) => {  
        return fetch(`/capture-order/${data.orderID}`, {  
          method: "POST",  
        })  
          .then((res) => res.json())  
          .then((details) => {  
            alert("Payment Successful!");  
          });  
      }}  
    />  
  );  
};  
```  

### 8. Start the React App  

```bash  
cd frontend  
npm start  
```  

---

## Testing the Integration  

1. Navigate to the React app in your browser (typically at `http://localhost:3000`).  
2. Click the PayPal button and log in using sandbox PayPal credentials.  
3. Test payments and check logs for backend responses.  

---

## Additional Notes  

- Ensure sandbox mode is enabled for testing.  
- Replace sandbox credentials with live credentials when moving to production.  

---

## Resources  

- [PayPal Developer Documentation](https://developer.paypal.com/)  
- [React PayPal Button Library](https://github.com/paypal/react-paypal-js)  
- [Video Tutorial Reference](https://www.youtube.com/watch?v=ccT69ZfsIJA)  

---  

Happy Coding! 🎉  
```  

This README provides a comprehensive guide to set up and understand PayPal integration. It is beginner-friendly and inspired by the referenced video.
