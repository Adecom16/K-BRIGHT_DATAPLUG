import React, { useEffect, useState } from 'react';
import Sidebar from './Minicomponents/Sidebar';
import './dash.css';
import Navbar from './Minicomponents/Navbar';
import ApexChart from './Minicomponents/Apexchart';
// import Performance from "./Minicomponents/Performance";
import Stat from './Minicomponents/Stat';
import DataBuyForm from '../Utils/Data';
import { Outlet } from 'react-router';

const User = ()=> {
     const { user, loading } = useState({});

    

     if (loading) {
          return <div>Loading...</div>;
     }
     return (
          <div>
               <div>
                    {/* Page Wrapper */}
                    <div id='wrapper'>
                         {/* //sidebar */}
                         <Sidebar />
                         {/* Content Wrapper */}
                         <div
                              id='content-wrapper'
                              className='d-flex flex-column'
                         >
                              {/* Main Content */}
                              <div id='content'>
                                   <Navbar />
                                   {/* Begin Page Content */}
                                   <Outlet/>
                              </div>
                              {/* End of Main Content */}
                         </div>
                         {/* End of Content Wrapper */}
                    </div>
                    {/* End of Page Wrapper */}
                    {/* Scroll to Top Button*/}
                    <a className='scroll-to-top rounded' href='#page-top'>
                         <i className='fas fa-angle-up' />
                    </a>
                    {/* Logout Modal*/}
               </div>
          </div>
     );
}

export default User;