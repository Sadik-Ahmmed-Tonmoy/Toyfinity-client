import React, { useContext } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Main.css"
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Main = () => {
  const navigation = useNavigation()
  const {loading} = useContext(AuthContext)
  return (
    <div className='container mx-auto overflow-x-hidden'>
       <Navbar></Navbar>
       <div className='flex items-center'>{loading && <progress className="progress w-72"></progress>}</div>
      <div>{navigation?.status === "loading" && <progress className="progress w-56"></progress>}</div>
      <div className='outlet-height'>
        <Outlet>

        </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;