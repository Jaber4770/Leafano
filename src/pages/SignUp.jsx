import { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const SignUp = () => {
    const { signInWithGooglePopUp } = use(AuthContext);
    const { createUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
        userProfile.email = email;
        form.reset();

        createUser(email, password)
            .then(userCredential => {
                (userCredential.user);
                if (userCredential.user) {
                    fetch('https://leafano-server.vercel.app/gardeners', {
                        method: "POST",
                        headers: { 'content-type': "application/json" },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Account created successfully!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
            .catch(error => {
                alert(error);
            })
    }

    const handleSignInWithGooglePopUp = () => {
        signInWithGooglePopUp()
    }

    return (
        <div className='flex justify-center items-center my-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-green-800 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center py-3 px-2">
                        SignUp now!</h1>
                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Name</label>
                        <div>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </g>
                                </svg>
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    placeholder="Name"
                                    minlength="3"
                                    maxlength="30"
                                    title="Only letters, numbers or dash"
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                        </div>
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
                        <div>
                            <label className="label">Photo URL</label>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </g>
                                </svg>
                                <input
                                    type="url"
                                    name='photourl'
                                    required
                                    placeholder="https://"
                                    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                    title="Must be valid URL"
                                />
                            </label>
                            <p className="validator-hint hidden">Must be valid URL</p>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
                        <span>Already have an Account? <Link className='text-blue-600 font-semibold' to="/login">Login</Link></span>
                    </form>
                    {/* Google */}
                    <button onClick={handleSignInWithGooglePopUp} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        SignIn with Google
                    </button>
                </div>
            </div>
        </div>
    );



};

export default SignUp;