import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto mt-4 shadow-lg marker:mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to='/' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Home </NavLink>
                    <NavLink to='/listed-books' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Listed Books </NavLink>
                    <NavLink to='/pages-to-read' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Pages to Read </NavLink>   
                </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to='/' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Home </NavLink>
                    <NavLink to='/listed-books' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Listed Books </NavLink>
                    <NavLink to='/pages-to-read' className={({isActive}) => isActive? 'text-primary font-bold': 'font-bold'}>Pages to Read </NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-3 ">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;