// import React from 'react'
// import PropTypes from 'prop-types'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { singInUser, signInWithGoogle, setUser,user, signInWithFacebook } =
    useContext(AuthContext);
   const handleSignIn = (e) => {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email, password);
     singInUser(email,password)
     .then(result=>{
      console.log(result.user);
     })
     .catch(error=>{
      console.log(error.message);
     })
   };

   const handleGoogleSignIn = async ()=>{
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
   }

   const handleFacebookSignIn = async () =>{
    try {
      const result = await signInWithFacebook();
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
   }

   useEffect(()=>{
    if (user) {
      navigate(location.state);
    }
   },[user,navigate,location])


   return (
     <Card
       color="transparent"
       className="shadow-2xl max-w-4xl mx-auto flex items-center justify-center mb-10 border-2 border-base-300 py-5"
     >
       <Typography variant="h4" color="blue-gray">
         Sign In
       </Typography>
       <Typography color="gray" className="mt-1 font-normal">
         Nice to meet you! Enter your email and password to Sign In.
       </Typography>
       <form
         onSubmit={handleSignIn}
         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
       >
         <div className="mb-1 flex flex-col gap-6">
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Your Email
           </Typography>
           <Input
             type="email"
             name="email"
             required
             size="lg"
             placeholder="name@mail.com"
             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Password
           </Typography>
           <Input
             type="password"
             name="password"
             required
             size="lg"
             placeholder="********"
             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
             labelProps={{
               className: "before:content-none after:content-none",
             }}
           />
         </div>
         <Button type="submit" className="mt-6 capitalize" fullWidth>
           Sign In
         </Button>

         <Typography color="gray" className="mt-4 text-center font-normal">
           If you have no account, Please{" "}
           <Link
             to={"/sign-up"}
             className="font-medium underline text-blue-500"
           >
             Sign Up
           </Link>
         </Typography>
       </form>
       <Button
         onClick={handleGoogleSignIn}
         type="submit"
         className="mt-6 capitalize"
         fullWidth
       >
         Sign In with Google
       </Button>
       <Button
         onClick={handleFacebookSignIn}
         type="submit"
         className="mt-6 capitalize"
         fullWidth
       >
         Sign In with Facebook
       </Button>
     </Card>
   );
}

SignIn.propTypes = {}

export default SignIn