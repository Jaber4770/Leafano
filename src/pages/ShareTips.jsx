import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const ShareTips = () => {

    const { user } = use(AuthContext);

    const handleShareTip = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tip = Object.fromEntries(formData.entries());
        // console.log(tip);

        fetch('http://localhost:3000/gardenersTips', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(tip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have shared your tip successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        form.reset();

    }


    return (
        <div className='my-10 container mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Share your best gardening <span className='text-green-500'>hacks</span> and <span className='text-green-500'>advice</span>.</h1>
            <div className='my-5 w-2/3 mx-auto mt-10'>
                <form onSubmit={handleShareTip} className='space-y-4'>
                    <label htmlFor="">Title</label>
                    <input className='border-2 border-green-500 w-full rounded-sm px-2 py-1' type="text" placeholder='Title' name='title' required />

                    <div className='flex gap-5'>
                        <div className='flex-1'>
                            <label htmlFor="">Difficulty Level</label> <br />
                            <input type="text" name='difficultyLevel' required className="input border-2 border-green-500  focus:outline-none" placeholder="Difficulty Level" list="difficulty" />
                            <datalist id="difficulty">
                                <option value="Easy"></option>
                                <option value="Medium"></option>
                                <option value="Hard"></option>
                            </datalist>
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="">Category</label><br />
                            <input type="text" name='category' required className="input border-2 border-green-500  focus:outline-none" placeholder="Category" list="category" />
                            <datalist id="category">
                                <option value="Composting"></option>
                                <option value="Plant Care"></option>
                                <option value="Vertical Gardening"></option>
                            </datalist>
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="">Privacy</label><br />
                            <input type="text" required name='privacy' className="input border-2 border-green-500  focus:outline-none" placeholder="Privacy" list="privacy" />
                            <datalist id="privacy">
                                <option value="Public"></option>
                                <option value="Private"></option>
                            </datalist>
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="">Plant Type/Topic</label> <br />
                            <input required name='plantType' className='border-2 border-green-500 w-full rounded-sm px-2 py-1' type="text" placeholder='What plant or topic is your tip about?' />
                        </div>
                    </div>

                    <label htmlFor="">Share your tip with others</label>
                    <textarea name="postBody" required id="" rows='5' placeholder='Share your tip here.....' className='border-2 border-green-500 w-full rounded-sm px-2 py-1'></textarea>

                    <div className='flex gap-5'>
                        <div className='flex-1'>
                            <label htmlFor="">Name</label> <br />
                            <input

                                value={user?.displayName}
                                className='border-2 border-green-500 w-full rounded-sm px-2 py-1' placeholder='name' type="text" name='name' /> {/*  Value={name} add hobe*/}
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="">Email</label><br />
                            <input
                                value={user?.email}
                                className='border-2 border-green-500 w-full rounded-sm px-2 py-1' placeholder='email' type="email" name='email' />  {/*  Value add hobe*/}
                        </div>
                    </div>

                    <label htmlFor="">Photo url</label>
                    <label className="input validator border-2 border-green-500 w-full focus-within:outline-none">
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
                            className='focus:outline-none'
                            type="url"
                            required
                            name='photo'
                            placeholder="Photo url"
                            title="Must be valid URL"
                        />
                    </label>
                    <p className="validator-hint none">Must be valid URL</p>
                    <input type="submit" className='btn w-1/2 mx-auto flex bg-green-500 text-white font-bold text-2xl' value="Post" />
                </form>
            </div>
        </div>
    );
};

export default ShareTips;