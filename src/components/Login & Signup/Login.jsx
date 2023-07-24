import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { motion } from "framer-motion"
import { AuthContext } from '../Provider/AuthProvider';
import GoGiFa from './GoGiFa';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const { signInWithEmailPass, resetPassword } = useContext(AuthContext);

    const emailRef = useRef();

    const { register, handleSubmit } = useForm();

    const [showPassowrd, setShowPassword] = useState(false)

    const onSubmit = data => {
        console.log(data);

        signInWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Success!! Enjoy Your Time',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(redirectTo, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            resetPassword(email)
                .then(() => {
                    Swal.fire({
                        title: 'Password Reset Email Sent!',
                        text: 'Please check your email to reset your password.',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to send password reset email. Please try again later.',
                        icon: 'error',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                });
        } else {
            Swal.fire({
                title: 'Invalid Email',
                text: 'Please enter a valid email address to reset your password.',
                icon: 'warning',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        }
    };

    return (
        <div className='md:h-full md:mt-14'>
            <div className='py-24 md:px-10 md:w-1/2 mx-auto md:border-2 rounded-2xl md:shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className='text-2xl font-bold text-center uppercase'>Login Now!</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" ref={emailRef} className="input input-bordered w-11/12" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='flex items-center justify-between'>
                            <input type={showPassowrd ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered w-11/12" />
                            <Link><FaEye className='text-xl' onClick={() => setShowPassword(!showPassowrd)}></FaEye></Link>
                        </div>
                    </div>

                    <button onClick={handleResetPassword} className='text-start text-red-800'>Forget Password? Reset</button>

                    <div className="form-control mt-6">
                        <motion.div className="box"
                            whileHover={{ scale: .9 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                            <input className="btn w-11/12 bg-orange-500 text-white hover:bg-orange-800 border-none" type="submit" value="Login" />
                        </motion.div>
                    </div>
                </form>
                <div className='mx-10'>
                    <Link to={'/signup'}><p className='text-orange-800'>New here?? Create an Account</p></Link>
                </div>
                <GoGiFa></GoGiFa>
            </div>
        </div>
    );
};

export default Login;