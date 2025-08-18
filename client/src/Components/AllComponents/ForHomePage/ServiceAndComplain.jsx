import { Card, CardContent } from '@/Components/ui/card';
import React from 'react';
import { IoMdLaptop } from "react-icons/io";


const ServiceAndComplain = () => {

    return (


        <>

            <div className='mt-[67px]'>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 justify-items-center'>
                    <Card className="w-[310px] rounded-[2px]">

                        <CardContent>

                            <div className='items-center flex gap-x-6'>
                                <div className='w-[65px] h-[65px] rounded-4xl bg-[#EF4A23] flex justify-center items-center'>
                                    <IoMdLaptop className='text-[white]  text-[25px]' />
                                </div>


                                <div>
                                    <h2 className='text-[18px] font-[700]'>Laptop Finder</h2>
                                    <p className='text-[15px] font-[400]'>Find Your Laptop Easily</p>
                                </div>
                            </div>

                        </CardContent>

                    </Card>

                    <Card className="w-[310px] rounded-[2px]">

                        <CardContent>

                            <div className='items-center flex gap-x-6'>
                                <div className='w-[65px] h-[65px] rounded-4xl bg-[#EF4A23] flex justify-center items-center'>
                                    <IoMdLaptop className='text-[white]  text-[25px]' />
                                </div>


                                <div>
                                    <h2 className='text-[18px] font-[700]'>Raise a Complain</h2>
                                    <p className='text-[15px] font-[400]'> Share your Experience </p>
                                </div>
                            </div>

                        </CardContent>

                    </Card>


                    <Card className="w-[310px] rounded-[2px]">

                        <CardContent>

                            <div className='items-center flex gap-x-6'>
                                <div className='w-[65px] h-[65px] rounded-4xl bg-[#EF4A23] flex justify-center items-center'>
                                    <IoMdLaptop className='text-[white]  text-[25px]' />
                                </div>


                                <div>
                                    <h2 className='text-[18px] font-[700]'>Home Service</h2>
                                    <p className='text-[15px] font-[400]'>Get Expert Help</p>
                                </div>
                            </div>

                        </CardContent>

                    </Card>


                    <Card className="w-[310px] rounded-[2px]">

                        <CardContent>

                            <div className='items-center flex gap-x-6'>
                                <div className='w-[65px] h-[65px] rounded-4xl bg-[#EF4A23] flex justify-center items-center'>
                                    <IoMdLaptop className='text-[white]  text-[25px]' />
                                </div>


                                <div>
                                    <h2 className='text-[18px] font-[700]'>Servicing Center</h2>
                                    <p className='text-[15px] font-[400]'> Repair Your Device </p>
                                </div>

                            </div>

                        </CardContent>

                    </Card>



                </div>

            </div>

        </>

    );
};

export default ServiceAndComplain;