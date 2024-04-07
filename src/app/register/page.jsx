'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

export default function LoginPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const supabase = createClientComponentClient();

    const handleSignUp = async (name, email, phone, password) => {
        await supabase.auth.signUp({
            name,
            email,
            phone,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh();
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
    }

    return (
        <main className="w-screen h-screen relative overflow-hidden">
            <div className="w-full h-[90px] absolute left-0 overflow-hidden bg-white">
            <div className="flex justify-end items-center absolute left-[1250px] top-[21px] gap-6">
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-6">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="none"
                    ><g clipPath="url(#clip0_2226_9309)">
                    <path
                        d="M9.33333 10.6667V8.00004C9.33333 6.23193 10.0357 4.53624 11.286 3.286C12.5362 2.03575 14.2319 1.33337 16 1.33337C17.7681 1.33337 19.4638 2.03575 20.714 3.286C21.9643 4.53624 22.6667 6.23193 22.6667 8.00004V10.6667H26.6667C27.0203 10.6667 27.3594 10.8072 27.6095 11.0572C27.8595 11.3073 28 11.6464 28 12V28C28 28.3537 27.8595 28.6928 27.6095 28.9429C27.3594 29.1929 27.0203 29.3334 26.6667 29.3334H5.33333C4.97971 29.3334 4.64057 29.1929 4.39052 28.9429C4.14048 28.6928 4 28.3537 4 28V12C4 11.6464 4.14048 11.3073 4.39052 11.0572C4.64057 10.8072 4.97971 10.6667 5.33333 10.6667H9.33333ZM9.33333 13.3334H6.66667V26.6667H25.3333V13.3334H22.6667V16H20V13.3334H12V16H9.33333V13.3334ZM12 10.6667H20V8.00004C20 6.93917 19.5786 5.92176 18.8284 5.17161C18.0783 4.42147 17.0609 4.00004 16 4.00004C14.9391 4.00004 13.9217 4.42147 13.1716 5.17161C12.4214 5.92176 12 6.93917 12 8.00004V10.6667Z"
                        fill="black"
                    ></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_2226_9309">
                        <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                    </defs>
                </svg>
                </div>
                </div>
                <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2">
                    <a href="/register">
                        <button className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] border border-[#143a79]">
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-[#143a79]">
                            Register
                            </p>
                        </button>
                    </a>
                <a href="/login"><button className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] border bg-[#143a79] ">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-white">
                    Login
                    </p>
                </button>
                </a>
                </div>
            </div>
            <div className="flex justify-start items-center absolute left-20 top-4 gap-4">
                <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-14 h-14 relative"
                preserveAspectRatio="xMidYMid meet"
                >
                <a href="/">
                <path
                    d="M0 16.8C0 7.52162 7.52162 0 16.8 0H39.2C48.4784 0 56 7.52162 56 16.8V39.2C56 48.4784 48.4784 56 39.2 56H16.8C7.52162 56 0 48.4784 0 39.2V16.8Z"
                    fill="#143A79"
                ></path>
                </a>
                <path
                    d="M25.2 19.6001C25.2 20.6249 24.9242 21.5867 24.444 22.4141L28 26.0191L37.4192 16.5999C37.9443 16.0749 38.6564 15.7801 39.3988 15.7801C40.1413 15.7801 40.8533 16.0749 41.3784 16.5999L24.4244 33.5539C25.1167 34.728 25.357 36.1143 25.1003 37.4529C24.8436 38.7915 24.1074 39.9906 23.0299 40.8253C21.9523 41.66 20.6074 42.073 19.247 41.987C17.8867 41.901 16.6045 41.3218 15.6407 40.358C14.6769 39.3942 14.0977 38.1119 14.0117 36.7516C13.9256 35.3913 14.3387 34.0463 15.1734 32.9688C16.0081 31.8912 17.2071 31.1551 18.5458 30.8984C19.8844 30.6417 21.2707 30.882 22.4448 31.5743L26.0204 28.0001L22.4448 24.4245C21.3811 25.0518 20.1398 25.3099 18.9142 25.1587C17.6885 25.0075 16.5473 24.4553 15.668 23.5882C14.7886 22.7211 14.2206 21.5876 14.0523 20.3642C13.8839 19.1408 14.1247 17.8961 14.7372 16.8237C15.3496 15.7513 16.2993 14.9115 17.4386 14.4348C18.5778 13.9581 19.8427 13.8714 21.0363 14.1882C22.2299 14.5049 23.2854 15.2073 24.0384 16.1861C24.7915 17.1649 25.1998 18.3651 25.2 19.6001ZM22.4 19.6001C22.4 18.8575 22.105 18.1453 21.5799 17.6202C21.0548 17.0951 20.3426 16.8001 19.6 16.8001C18.8574 16.8001 18.1452 17.0951 17.6201 17.6202C17.095 18.1453 16.8 18.8575 16.8 19.6001C16.8 20.3427 17.095 21.0549 17.6201 21.58C18.1452 22.1051 18.8574 22.4001 19.6 22.4001C20.3426 22.4001 21.0548 22.1051 21.5799 21.58C22.105 21.0549 22.4 20.3427 22.4 19.6001ZM41.3784 39.3989C40.8533 39.9238 40.1413 40.2187 39.3988 40.2187C38.6564 40.2187 37.9443 39.9238 37.4192 39.3989L29.9754 31.9565L31.9564 29.9755L41.3784 39.3989V39.3989ZM33.6 26.6001H36.4V29.4001H33.6V26.6001ZM39.2 26.6001H42V29.4001H39.2V26.6001ZM19.6 26.6001H22.4V29.4001H19.6V26.6001ZM14 26.6001H16.8V29.4001H14V26.6001ZM19.6 39.2001C20.3426 39.2001 21.0548 38.9051 21.5799 38.38C22.105 37.8549 22.4 37.1427 22.4 36.4001C22.4 35.6575 22.105 34.9453 21.5799 34.4202C21.0548 33.8951 20.3426 33.6001 19.6 33.6001C18.8574 33.6001 18.1452 33.8951 17.6201 34.4202C17.095 34.9453 16.8 35.6575 16.8 36.4001C16.8 37.1427 17.095 37.8549 17.6201 38.38C18.1452 38.9051 18.8574 39.2001 19.6 39.2001V39.2001Z"
                    fill="white"
                ></path>
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#143a79]">
                Bahay Ni Cuya
                </p>
                </div>
            </div>
            <div className="w-full h-[90%] flex">
                <div className="w-[50%] h-80% flex justify-center items-center">
                    <div className="w-[745px] h-[400px] relative">
                        <svg
                            width="526"
                            height="526"
                            viewBox="0 0 526 526"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[110px] top-[-1px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle cx="263" cy="263" r="263" fill="#E9F0FB"></circle>
                        </svg>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[629px] top-[162px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle cx="20" cy="20" r="20" fill="#FFD700"></circle>
                        </svg>
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[54px] top-[414px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle cx="40" cy="40" r="40" fill="#143A79"></circle>
                        </svg>
                        <svg
                            width="54"
                            height="30"
                            viewBox="0 0 54 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[29.2px] h-[53.98px]"
                            preserveAspectRatio="none"
                        >
                        </svg>
                    </div>
                    <img
                        src="./img/woman.png"
                        className="w-[382px] h-[530px] absolute left-[200px] top-[190px] object-cover"
                    />
                </div>
                
                <div className="w-[50%] h-full flex flex-col justify-start items-center gap-10 py-5 mt-[5rem]">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[450px] h-9 gap-6">
                        <div className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] bg-[#db4437]">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" preserveAspectRatio="xMidYMid meet">
                                <g clipPath="url(#clip0_2330_11061)">
                                    <path d="M3.314 7.51C4.14601 5.85324 5.42237 4.46051 7.00043 3.48747C8.57849 2.51443 10.3961 1.99942 12.25 2C14.945 2 17.209 2.99 18.94 4.605L16.073 7.473C15.036 6.482 13.718 5.977 12.25 5.977C9.645 5.977 7.44 7.737 6.655 10.1C6.455 10.7 6.341 11.34 6.341 12C6.341 12.66 6.455 13.3 6.655 13.9C7.441 16.264 9.645 18.023 12.25 18.023C13.595 18.023 14.74 17.668 15.636 17.068C16.1554 16.726 16.6001 16.2822 16.9432 15.7635C17.2863 15.2448 17.5206 14.6619 17.632 14.05H12.25V10.182H21.668C21.786 10.836 21.85 11.518 21.85 12.227C21.85 15.273 20.76 17.837 18.868 19.577C17.214 21.105 14.95 22 12.25 22C10.9366 22.0005 9.63604 21.7422 8.42254 21.2399C7.20905 20.7375 6.10645 20.0009 5.17776 19.0722C4.24907 18.1436 3.5125 17.041 3.01013 15.8275C2.50777 14.614 2.24948 13.3134 2.25 12C2.25 10.386 2.636 8.86 3.314 7.51Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2330_11061">
                                        <rect width="24" height="24" fill="white" transform="translate(0.25)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-white">
                                With Google
                            </p>
                        </div>
                        <div className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-5 py-3 rounded-[800px] bg-[#4267b2]">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-grow-0 flex-shrink-0 w-6 h-6 relative" preserveAspectRatio="xMidYMid meet">
                                <g clipPath="url(#clip0_2330_11056)">
                                    <path d="M14.25 13.5H16.75L17.75 9.5H14.25V7.5C14.25 6.47 14.25 5.5 16.25 5.5H17.75V2.14C17.424 2.097 16.193 2 14.893 2C12.178 2 10.25 3.657 10.25 6.7V9.5H7.25V13.5H10.25V22H14.25V13.5Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2330_11056">
                                        <rect width="24" height="24" fill="white" transform="translate(0.25)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center uppercase text-white">
                                With Facebook
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[667px] relative gap-6">
                        <div className="flex-grow h-px relative">
                            <div className="w-[299.5px] h-px absolute left-[-1px] top-[-1px] bg-[#e0e0e0]"></div>
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#828282]">OR</p>
                        <div className="flex-grow h-px relative">
                            <div className="w-[299.5px] h-px absolute left-[-1px] top-[-1px] bg-[#e0e0e0]"></div>
                        </div>
                    </div>
                    <div className="h-[850px] w-[350px]">
                        <h1 className="text-2xl mb-3 text-center">Register</h1>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="John Doe" className="h-10 p-2 border rounded-xl"/>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="johndoe@gmail.com" className="h-10 p-2 border rounded-xl text-sm"/>
                            <label htmlFor="phonenum">Phone Number</label>
                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="+63 9123456789" className="h-10 p-2 border rounded-xl text-sm"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="********" className="h-10 p-2 border rounded-xl text-sm"/>
                            <button onClick={() => handleSignUp(name, email, phone, password)} name="submit" id="submitbtn" className="flex justify-center items-center px-4 py-2 rounded-xl bg-[#ffd700] w-[150px] cursor-pointer text-sm">
                                REGISTER
                            </button>
                        </div>
                    </div>
                </div>          
            </div>
        </main>
    );
}