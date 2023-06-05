import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import SocialLogin from "./SocialLogin";


const Login = () => {
  useTitle('Login');
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        
        console.log(user);
        navigate(from, {replace: true})
        setError('');
        
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <>
      
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src='https://i.ibb.co/P99h3YQ/Tablet-login-pana-1.png' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt Link Link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn  bg-[#039477] hover:bg-[#3bb89f] text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              {/* <SocialLogin/> */}
              <SocialLogin/>
            </form>
            <p className="text-red-500 font-semibold">{error}</p>
            <p>
              New to Mohite Tex? please
              <Link className="text-orange-600 font-semibold" to="/signup">
                {" "}
                Sign Up
              </Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
