import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../context/Authcontext/Authcontext';
import logo from '../../../assets/img/logo.png'
import { FaSortDown } from "react-icons/fa";
import { motion } from "motion/react"
const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const handleSignOut = () => {
        signOutUser().then('signout User').catch(error => console.log(error))
    }
    const links = <>
        <motion.li className='hover:border-b hover:text-blue-400'  ><NavLink to='/'>Home<FaSortDown size={20} /></NavLink></motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'> <NavLink to='#'> Find a Job  <FaSortDown size={20}/></NavLink> </motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'><NavLink to='#'>Recruiters <FaSortDown size={20} /></NavLink></motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'><NavLink to='#'>Candidates  <FaSortDown size={20} /></NavLink></motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'><NavLink to='#'>Pages  <FaSortDown size={20} /></NavLink></motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'><NavLink to='#'>Blog  <FaSortDown size={20} /></NavLink></motion.li>
        <motion.li className='hover:border-b hover:text-blue-400'><NavLink to='#'>Contact <FaSortDown size={20} /></NavLink></motion.li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="  font-bold text-2xl flex items-center cursor-pointer"><img className='w-20' src={logo} alt="" /><span className='hover:border-b'>Job Mart</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <NavLink className='btn' to='/register'>Register</NavLink>
                    <NavLink className='btn' to='/signin'>Sign In</NavLink> */}

                    {
                        user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <>

                            
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}> 
                                    <NavLink className='mr-4 cursor-pointer hover:border-b ' to='/register'>Register</NavLink>
                                     </motion.button>
                                     <motion.button whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.8 }}>
                            <NavLink  className='cursor-pointer hover:border-b hover:text-blue-400' to='/signin'>Sign In</NavLink >
                                     </motion.button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;