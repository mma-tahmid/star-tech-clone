import React from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";


const Footer = () => {

    return (

        <>
            <div className='grid grid-cols-4 gap-x-10 justify-items-center lg:justify-items-start'>

                {/* 1st Part */}

                <div className='col-span-1'>

                    <div>
                        <h2 className=' text-[20px] font-[400] text-white'>Support</h2>

                        {/* 1st Item */}

                        <div className=' w-[300px] border border-[#2c3640] rounded-4xl mt-4 px-4 py-4'>
                            <div className='flex items-center gap-x-8'>

                                <div >
                                    <IoCallOutline className='text-white w-[20px] h-[30px]' />
                                </div>

                                {/* <!-- Vertical line --> */}
                                <div class="w-px h-10 bg-gray-600"></div>


                                <div>
                                    <h6 className='text-[#838383]'>9 AM - 8 PM</h6>
                                    <h3 className='text-[#EF4A23] text-[20px] font-[400]'>16793</h3>
                                </div>

                            </div>
                        </div>

                        {/* 2nd Item */}
                        <div className=' w-[300px] border border-[#2c3640] rounded-4xl mt-5 px-4 py-4'>
                            <div className='flex items-center gap-x-8'>

                                <div >
                                    <MdOutlineLocationOn className='text-white w-[30px] h-[50px]' />
                                </div>

                                {/* <!-- Vertical line --> */}
                                <div class="w-px h-10 bg-gray-600"> </div>


                                <div>
                                    <h6 className='text-[#838383]'>Store Locator</h6>
                                    <h3 className='text-[#EF4A23] text-[20px] font-[400]'>Find Our Stores</h3>
                                </div>

                            </div>
                        </div>


                    </div>

                </div >

                {/* 2nd Part */}

                <div className='col-span-2'>
                    <h2 className=' text-[20px] font-[400] text-white'>About Us</h2>
                    {/* grid grid-cols-3  gap-x-1 */}
                    <ul className="columns-3 mt-4 space-y-4 text-[#838383] text-[14px]">
                        <li><Link>Affiliate Program</Link></li>
                        <li><Link>Online Delivery</Link></li>
                        <li><Link>Refund and Return Policy</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Emi Terms</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Star Point Policy</Link></li>
                        <li><Link>Contact us</Link></li>
                        <li><Link>About us</Link></li>
                        <li><Link>Terms And Condition </Link></li>
                        <li><Link>Carrier</Link></li>
                        <li><Link>Brands</Link></li>
                    </ul>


                </div>

                {/* 3rd Part */}

                <div className='col-span-1'>
                    <h2 className=' text-[20px] font-[400] text-white'>Stay Connected</h2>

                    <div className='mt-4'>
                        <h3 className='text-white'>Star Tech Ltd</h3>
                        <p className='text-[#838383] mt-4'>Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>

                        <p className='mt-3'><span className='text-[#838383]'>Email: </span>
                            <span className='text-[#CA4123]'>webteam@startechbd.com</span></p>
                    </div>

                </div>



            </div >

        </>


    );
};

export default Footer;