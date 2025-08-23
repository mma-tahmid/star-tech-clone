import React from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LiaAppStoreIos } from "react-icons/lia";




const Footer = () => {

    return (

        <>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-10 justify-items-center lg:justify-items-start'>

                {/* 1st Part */}

                <div className='col-span-1'>

                    <div>
                        <h2 className=' text-[20px] font-[400] text-center md:text-left text-white'>Support</h2>

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
                    <h2 className=' text-[20px] font-[400] text-center md:text-left mt-6 md:mt-0 text-white'>About Us</h2>
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
                    <h2 className=' text-[20px] font-[400] text-white text-center md:text-left mt-6 md:mt-0'>Stay Connected</h2>

                    <div className='mt-4'>
                        <h3 className='text-white text-center md:text-left'>Star Tech Ltd</h3>
                        <p className='text-[#838383] mt-4'>Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>

                        <p className='mt-3'><span className='text-[#838383]'>Email: </span>
                            <span className='text-[#CA4123]'>webteam@startechbd.com</span></p>
                    </div>

                </div>
            </div >


            <div className=' mt-[79px] border border-[#838383] w-full'></div>

            <div className=' mt-4 grid grid-flow-row gap-x-5 gap-y-5 lg:gap-x-0 lg:gap-y-0  lg:grid-flow-col grid-cols-1 lg:grid-cols-4 place-items-center lg:justify-items-start text-[#838383]'>

                <div className=' col-span-1 text-[12px] font-[400]'>Experience Star Tech App on your mobile:
                </div>

                <div className='col-span-2 grid grid-cols-2 gap-x-6'>

                    <Link>
                        <div className='border w-[154px] rounded-[10px] px-2 py-2'>
                            <div className='flex gap-x-3'>
                                <BiLogoPlayStore className='text-[34px] text-white' />

                                <div>
                                    <p className='text-[10px] font-[400] text-[#838383]' >Download on </p>
                                    <h3 className='text-[14px] font-[400] text-white'>Google Play</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link>
                        <div className='border w-[154px] rounded-[10px] px-2 py-2'>
                            <div className='flex gap-x-3'>
                                <LiaAppStoreIos className='text-[34px] text-white' />

                                <div>
                                    <p className='text-[10px] font-[400] text-[#838383]' >Download on </p>
                                    <h3 className='text-[14px] font-[400] text-white'>App Store</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='col-span-1 flex gap-x-5'>

                    <Link>
                        <div className='w-[45px] h-[45px] rounded-[50%] bg-[#212D37] flex items-center justify-center'>
                            <FaWhatsapp className='text-white font-bold text-[23px] ' />
                        </div>
                    </Link>

                    <Link>
                        <div className='w-[45px] h-[45px] rounded-[50%] bg-[#212D37] flex items-center justify-center'>
                            <FaFacebook className='text-white font-bold text-[23px] ' />
                        </div>
                    </Link>

                    <Link>
                        <div className='w-[45px] h-[45px] rounded-[50%] bg-[#212D37] flex items-center justify-center'>
                            <FaYoutube className='text-white font-bold text-[23px] ' />
                        </div>
                    </Link>

                    <Link>
                        <div className='w-[45px] h-[45px] rounded-[50%] bg-[#212D37] flex items-center justify-center'>
                            <FaInstagramSquare className='text-white font-bold text-[23px] ' />
                        </div>
                    </Link>

                </div>

            </div>


            <div className='mt-[30px]  border border-[#838383] w-full'></div>

            <div className='mt-7'>
                <div className='flex justify-between'>
                    <p className='text-[#838383]'>&copy; 2025 Star Tech Ltd | All rights reserved</p>
                    <p className='text-[#838383]'>Powered By: Star Tech</p>
                </div>
            </div>

        </>


    );
};

export default Footer;