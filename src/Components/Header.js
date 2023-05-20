import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'


import logo from '../Assets/logo.png'
import avatar from '../Assets/avatar.png'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';



const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue()
    const [IsMenu, setIsMenu] = useState(false)

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!IsMenu)
        }
    }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null
        });
    };


    return (
        <header className='w-screen z-50 fixed p-3 px-4 md:p-6 md:px-16'>

            {/* desktop and tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className='w-8 object-cover ' />
                    <p className="text-headingColor text-xl font-bold">Lootkart</p>
                </Link>

                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </motion.ul>
                    <div className="relative  flex items-center justify-center">
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs font-semibold text-white">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.5 }}
                            onClick={login}
                            src={user ? user.photoURL : avatar}
                            alt="userprofile"
                            className='w-10 h-10 rounded-full min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer'
                        />
                        {IsMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 top-12 right-0 shadow-xl bg-primary flex flex-col rounded-lg absolute">
                                {user && user.email === "samar.suvaidyam@gmail.com" && (
                                    <Link to={"/createItem"}>
                                        <p  onClick={() => setIsMenu(false)} className='px-4 py-2 transition-all flex items-center gap-3 cursor-pointer duration-100 hover:bg-slate-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                    </Link>
                                )}
                                <p onClick={logout} className='px-4 py-2 transition-all flex items-center gap-3 cursor-pointer duration-100 hover:bg-slate-100 ease-in-out text-textColor text-base'>Log Out <MdLogout /></p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <div className="relative  flex items-center justify-center">
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs font-semibold text-white">2</p>
                    </div>
                </div>
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className='w-8 object-cover ' />
                    <p className="text-headingColor text-xl font-bold">Lootkart</p>
                </Link>
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.5 }}
                        onClick={login}
                        src={user ? user.photoURL : avatar}
                        alt="userprofile"
                        className='w-10 h-10 rounded-full min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer'
                    />
                    {IsMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 top-12 right-0 shadow-xl bg-primary flex flex-col rounded-lg absolute">
                            {user && user.email === "samar.suvaidyam@gmail.com" && (
                                <Link to={"/createItem"}>
                                    <p onClick={() => setIsMenu(false)} className='px-4 py-2 transition-all flex items-center gap-3 cursor-pointer duration-100 hover:bg-slate-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                </Link>
                            )}
                            <ul

                                className='flex flex-col'>
                                <li onClick={() => setIsMenu(false)} className='text-base px-4 py-2 hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                                <li onClick={() => setIsMenu(false)} className='text-base px-4 py-2 hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                                <li onClick={() => setIsMenu(false)} className='text-base px-4 py-2 hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                                <li onClick={() => setIsMenu(false)} className='text-base px-4 py-2 hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                            </ul>
                            <p onClick={logout} className='m-2 p-2 rounded-md shadow-md transition-all flex items-center justify-center bg-gray-200  gap-3 cursor-pointer duration-100 hover:bg-slate-300 ease-in-out text-textColor text-base'>Log Out <MdLogout /></p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
