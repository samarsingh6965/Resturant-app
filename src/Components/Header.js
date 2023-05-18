import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
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
    const provider =new GoogleAuthProvider();

    const [{user},dispatch] = useStateValue()
    const login = async () => {
        const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider)
        dispatch({
            type : actionType.SET_USER,
            user : providerData,
        })
    }

    return (
        <header className='w-screen z-50 fixed p-6 px-16'>

            {/* desktop and tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={logo} alt="logo" className='w-8 object-cover ' />
                    <p className="text-headingColor text-xl font-bold">Lootkart</p>
                </Link>

                <div className="flex items-center gap-8">
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>
                    <div className="relative  flex items-center justify-center">
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs font-semibold text-white">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            onClick={login}
                            src={user ? user.photoURL : avatar} alt="userprofile" className='w-10 h-10 rounded-full min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="block md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header
