import React, { use } from 'react';
import { AuthContext } from '../../context/Authcontext/Authcontext';
import Lottie from 'lottie-react';
import login from '../../assets/animation/Login.json'
import { Link, useLocation, useNavigate } from 'react-router';
import Sociallogin from '../Shared/Sociallogin/Sociallogin';
const Signin = () => {

    const { signInUser } = use(AuthContext);

    const location=useLocation()
    const from = location.state || '/'
    const navigate= useNavigate()
    

    const handlesignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pwd = form.password.value;
        
        signInUser(email, pwd)
        .then( result => {
            navigate(from)
        }
        ).catch(
            error => console.log(error)
        )
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full max-w-sm ">

                    <Lottie animationData={login} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Log In now!</h1>
                        <form onSubmit={handlesignin}>
                            <fieldset className="fieldset">

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />

                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <Sociallogin from={from}/>
                        <div><p >Don't Have an Account Please <Link to='/register' className="link link-hover"><span className='font-semibold text-red-500'>Register</span></Link> </p></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;