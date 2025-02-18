"use client";
import { useState } from "react";
import SIgnIn from "./SignIn";
import Register from "./Register";
import { Button } from "../ui/button";


const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoginSuccess,setIsloginSuccess]=useState(false)
  return (
   
    isLoginSuccess?<> <div className="w-4xl flex h-[30vh] justify-center items-center">Logged in successfull!</div></>: <div>
        {/* Render SignIn or Register component based on state */}
        {isLoginPage ? <SIgnIn setIsloginSuccess={setIsloginSuccess}/> : <Register setIsLoginPage={setIsLoginPage}/>}

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