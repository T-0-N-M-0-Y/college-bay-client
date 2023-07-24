import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Social = () => {

    const { signInWithGoogle, signInWithGithub, user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
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
                }

                const userSaved = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userSaved)
                })
                    .then(res => res.json())
                    .then(() => {
                    })
            })
    }

    const handleGithubSignIn= () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
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
                }

                const userSaved = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('https://college-bay-server-t-0-n-m-0-y.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userSaved)
                })
                    .then(res => res.json())
                    .then(() => {
                    })
            })
    }

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="md:flex justify-between items-center text-center bg-sky-950 text-white md:px-20">
                {
                    user ?
                        <>
                            <div className="flex items-center justify-center">
                                <p className="mr-2">Follow Us : </p>
                                <a href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaTwitter className="mx-3"></FaTwitter></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex items-center">
                                <p className="mr-2">Login with : </p>
                                <Link><button onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button></Link>
                                <Link><button onClick={handleGithubSignIn}><FaGithub className="mx-2"></FaGithub></button></Link>
                                <Link><button><FaFacebook></FaFacebook></button></Link>
                            </div>
                        </>
                }
                <div>
                    {
                        user ?
                            <>
                                <Link><button className="bg-sky-800 hover:text-white text-white px-3 py-1 hidden" onClick={handleSignOut}>Logout</button></Link>
                            </>
                            :
                            <>
                                <Link to={'/login'}><button className="bg-sky-800 hover:text-white text-white px-3 py-1">Login</button></Link>
                            </>
                    }
                    {
                        user ?
                            <>
                                <div className="flex items-center justify-center tooltip tooltip-bottom" data-tip="Edit Profile">
                                    <Link><button>{user.displayName}</button></Link>
                                    <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
                                </div>
                            </>
                            :
                            <>
                                <Link to={'/signup'}><button className="bg-orange-500 hover:text-white text-white px-3 py-1">Sign up</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Social;