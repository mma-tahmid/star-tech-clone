import React from 'react';
import { MdOutlineCardGiftcard } from "react-icons/md";
import { PiHourglassThin } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { Button } from '../ui/button';
import { Input } from '../ui/input';



const NavBar = () => {

    return (

        <>

            <div className='flex justify-between items-center'>

                {/* logo */}
                <div>
                    <img className='object-cover ' src="https://i.ibb.co.com/SXr4322L/star-tech-logo.png" alt="logo" />
                </div>

                {/* Search Field */}
                <div className='w-[500px]'>
                    <Input
                        type="text"
                        placeholder="Search..."
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full py-5 bg-white max-w-sm mb-4 focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:border-neutral-200"
                    />
                </div>

                {/* MENU */}

                <div className='flex justify-between gap-x-6'>

                    <div className='flex items-center gap-x-4'>
                        <div> <MdOutlineCardGiftcard className='text-[#D12921] w-[30px] h-[30px]' /></div>
                        <div>
                            <h6 className='text-[18px] font-[400] text-[#FFFFFF]'>Offers</h6>
                            <p className='text-[13px] font-[400]  text-[#838383]'>Latest Offer</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <div> <PiHourglassThin className='text-[#D12921] w-[30px] h-[30px]' /></div>
                        <div>
                            <h6 className='text-[18px] font-[400] text-[#FFFFFF]'>Happy Hours</h6>
                            <p className='text-[13px] font-[400]  text-[#838383]'>Special Deals</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <div>  <FaUserPlus className='text-[#D12921] w-[30px] h-[30px]' /></div>
                        <div>
                            <h6 className='text-[18px] font-[400] text-[#FFFFFF]'>Account</h6>
                            <p className='text-[13px] font-[400]  text-[#838383]'>Register or Login</p>
                        </div>
                    </div>
                </div>

                {/* Button */}

                <div>
                    <Button variant={null} className="text-white  text-[14px] font-[600] bg-[#26368E] px-6 py-6"> <span className='uppercase'>PC</span> Builder </Button>
                    {/* variant={null} ----> used so that, this two class is worked px-6 py-6,  */}
                </div>

            </div>


        </>
    );
};

export default NavBar;