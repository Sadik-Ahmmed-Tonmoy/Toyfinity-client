import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  // console.log(user)

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/allToys" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/addAToy" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Add A Toy</NavLink>
            </li>
            <li>
              <NavLink to="/myToy" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>My Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Blogs</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/"><img className='w-36' src="https://i.ibb.co/jH2zFgr/Toyfinity-logo-fotor-bg-remover-20230517211635-fotor-bg-remover-20230517212153.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/allToys" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>All Toys</NavLink>
          </li>
          {user && <li>
            <NavLink to="/addAToy" className={({ isActive }) => (isActive ? "text-blue-600" : "")}> Add A Toy</NavLink>
          </li>}
          {user && <li>
            <NavLink to="/myToy" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>My Toy</NavLink>
          </li>}
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-blue-600" : "")}>Blogs</NavLink>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        {user && <p className='mx-2 hidden md:block'>{user?.email}</p>}
        {user?.photoURL && <img className='rounded-full h-12 mx-2 hidden md:block' title={user?.displayName} src={user?.photoURL} alt="" />}
        {user ? <button onClick={logOut} className="btn btn-outline btn-warning">Logout</button> : <button className="btn btn-outline btn-primary"><Link to="/logIn">Login</Link></button>}
      </div>
    </div>
  );
};

export default Navbar;