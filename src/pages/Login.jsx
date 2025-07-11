import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {

    const { loginUser, loginWithGooglePopUp } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // if (user?.email) {
    //     navigate('/')
    // }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //  (email, password);

        loginUser(email, password)
            .then(userCredential => {
                //  (userCredential.user);
                if (userCredential.user) {

                    navigate(`${location.state ? location.state : '/'}`)

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login complete!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                alert(error.message);
            })


        form.reset();
    }

    const handleLoginWithGooglePopUp = () => {
        loginWithGooglePopUp()
            .then(res => {
                if (res.user) {
                    navigate('/')
                }
            })
    }



    return (
        <div className='flex justify-center items-center my-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body ">
                    <h1 className="text-5xl font-bold text-center py-3 px-2">Login now!</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        {/* email */}
                        <div>
                            <label className="input validator focus-within:outline-none focus-within:ring-0 focus-within:shadow-none">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input name='email' type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <label className="label">Password</label>
                        {/* Password */}
                        <div>
                            <label className="input validator focus-within:outline-none focus-within:ring-0 focus-within:shadow-none">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                <input
                                    name='password'
                                    type="password"
                                    required
                                    placeholder="Password"
                                    minLength="8"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be more than 8 characters, including
                                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                            </p>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <span>New to Leafano? <Link className='text-blue-600 font-semibold' to="/signup">SignUp</Link></span>
                    </form>
                    {/* Google */}
                    <button onClick={handleLoginWithGooglePopUp} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;