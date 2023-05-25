import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import loginLottie from "../../assets/106680-login-and-sign-up.json"
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const SignUp = () => {

  // private route old location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false)
  console.log(showPassword)

  const handleName = (event)=> {
    const nameInput = event.target.value;
    setName(nameInput)
  }
  const handleURL = (event) => {
    const URL = event.target.value;
    setImageURL(URL)
  }

  // HANDLE EMAIL
  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput)
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
      setEmailError("Please provide a valid email")
    }
    else {
      setEmailError("")
    }
  }

  // HANDLE PASSWORD
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput)
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long")
    }
    else {
      setPasswordError("")
    }
  }

  // Show Password
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  // const {loginUser} = useContext(authContext)
  const { signUpUser, user } = useContext(AuthContext)

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault()
    if (emailError) {
      event.target.email.focus()
    }
    else if (passwordError) {
      event.target.password.focus()
    }
    if (email, password) {
      signUpUser(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          navigate(from || "/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

  }


  return (
    <div className="hero flex items-center">
      <Helmet>
        <title>SignUp | Toyfinity</title>
      </Helmet>
      <div className="hero-content flex-col-reverse lg:flex-row  mx-auto md:gap-36">
        <div className="text-center lg:text-left border rounded-2xl">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 m-3">
          <h1 className="text-5xl font-bold text-center m-3">Please SignUp</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" onChange={handleName} value={name} required name='name' placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="url" onChange={handleURL} value={imageURL} required name='URL' placeholder="Image URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" onChange={handleEmail} value={email} required name='email' placeholder="email" className="input input-bordered" />
                {emailError && <span className='p-2 my-2 text-red-700 bg-red-200 border rounded-md flex items-center'><MdError></MdError>{emailError}</span>}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? "text" : "password"} onChange={handlePassword} value={password} required name='password' placeholder="password" className="input input-bordered" />
                {passwordError && <span className='p-2 my-2 text-red-700 bg-red-200 border rounded-md flex items-center'><MdError></MdError>{passwordError}</span>}
                {
                  showPassword ? <p onClick={handleShowPassword} className='me-3 absolute top-14 cursor-pointer -right-0 '><AiOutlineEyeInvisible /></p> : <p onClick={handleShowPassword} className='me-3 absolute top-14 cursor-pointer -right-0'><AiFillEye /></p>
                }
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <div className="divider">or login with</div>
            <SocialLogin></SocialLogin>
            <p className='text-center'>Already have an account? <br /> Please<span><button className="btn btn-link p-1"><Link to="/logIn">Login</Link></button></span></p>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default SignUp;