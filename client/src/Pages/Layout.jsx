import Footer from '@/Components/LayoutComponents/Footer';
import NavBar from '@/Components/LayoutComponents/NavBar';
import React from 'react';

const Layout = ({ children }) => {

    return (

        <>

            <div className='bg-[#081621] py-[18px]'>
                <div className='main-container'>
                    <NavBar />
                </div>
            </div>

            <main className='main-container'>
                {children}
            </main>


            <div className='bg-[#081621] py-[55px] mt-[120px]'>
                <div className='main-container'>
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default Layout;