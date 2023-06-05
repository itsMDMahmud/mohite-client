import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';
import SocialLogin from './SocialLogin';
const SignUp = () => {
  useTitle('Sign Up');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
         <img src='https://i.ibb.co/nDHZm0X/Mobile-login-pana-1.png' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <input className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" type="submit" value="Sign Up" />
            </div>
            <SocialLogin/>
            </form>
            <p>Already have account? please 
                <Link className="text-orange-600 font-semibold" to='/login'> Login</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;