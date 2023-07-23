import { Navigate } from "react-router-dom";

export default function AuthHandler() {
    const isAuthenticated = false;
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }  
    return <YourAuthenticatedComponent />;
  }
  
  function YourAuthenticatedComponent() {
    return <div>Welcome, you are logged in!</div>;
  }

