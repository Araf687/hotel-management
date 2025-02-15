"use client";
import { useState } from "react";
import SIgnIn from "./SignIn";
import Register from "./Register";
import { Button } from "../ui/button";


const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div>
        {/* Render SignIn or Register component based on state */}
        {isLoginPage ? <SIgnIn /> : <Register />}

        {/* Toggle between Login and Register */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isLoginPage ? "Don't have an account? " : "Already have an account? "}
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 p-0"
              onClick={() => setIsLoginPage(!isLoginPage)}
            >
              {isLoginPage ? "Register" : "Login"}
            </Button>
          </p>
        </div>
    
    </div>
  );
};

export default Auth;