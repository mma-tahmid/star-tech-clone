import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';


const data = [
    {
        id: 1,
        title1: "Haier 1.6 Ton EnergyCool Inverter AC",
        title2: "Midea 1.5 Ton Inverter AC",
        image1: "https://i.ibb.co.com/B5L5bqvC/product1.webp",
        image2: "https://i.ibb.co.com/BVx1Bf8h/hsu-12energycool-official-200x200.webp",
        price1: 55493,
        oldPrice1: 74990,
        price2: 54686,
        oldPrice2: 73990
    },

    {
        id: 2,
        title1: "Tecno SPARK 40 Pro",
        title2: "Vivo Y29",
        image1: "https://i.ibb.co.com/5xJtzMVK/vivo-y29-elegant-white-01-200x200.webp",
        image2: "https://i.ibb.co.com/fdt5WG7W/spark-40-pro-ink-black-official-200x200.webp",
        price1: 19690,
        oldPrice1: 19999,
        price2: 19999,
        oldPrice2: 24000
    },

    {
        id: 3,
        title1: "Tecno SPARK 40 Pro",
        title2: "Vivo Y29",
        image1: "https://i.ibb.co.com/5xJtzMVK/vivo-y29-elegant-white-01-200x200.webp",
        image2: "https://i.ibb.co.com/fdt5WG7W/spark-40-pro-ink-black-official-200x200.webp",
        price1: 19690,
        oldPrice1: 19999,
        price2: 19999,
        oldPrice2: 24000
    },

    {
        id: 4,
        title1: "Tecno SPARK 40 Pro",
        title2: "Vivo Y29",
        image1: "https://i.ibb.co.com/5xJtzMVK/vivo-y29-elegant-white-01-200x200.webp",
        image2: "https://i.ibb.co.com/fdt5WG7W/spark-40-pro-ink-black-official-200x200.webp",
        price1: 19690,
        oldPrice1: 19999,
        price2: 19999,
        oldPrice2: 24000
    },

];






const FeaturedComparisons = () => {

    return (

        <>
            <div className='mt-[67px]'>

                <div>

                    <h1 className='flex justify-center text-[20px] font-[700]'>Featured Comparisons</h1>

                    <p className='flex justify-center text-[15px] font-[400]'>Compare & Choose Your Desired Product!</p>
                </div>

                <div className='mt-[35px] grid justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8  gap-y-3'>

                    {
                        data.map((item, i) => (

                            <Link>

                                <Card key={i} className="w-[390px] lg:w-[450px] px-4">

                                    <div className='grid grid-cols-[1fr_auto_1fr]'>

                                        {/* Left product */}

                                        <div className=''>

                                            <div>
                                                <img className='object-cover w-full' src={item.image1} alt="product1" />
                                            </div>

                                            <CardTitle className="mt-4" >{item.title1}</CardTitle>

                                            <div className='mt-8 flex flex-row items-center gap-x-3'>

                                                <h2 className='text-[#D51E0B] font-bold text-[22px]'>{item.price1} ৳

                                                </h2>

                                                <h2 className='line-through text-[#667092] text-[18px]'>{item.oldPrice1} ৳

                                                </h2>

                                            </div>

                                        </div>


                                        {/* Divider with VS */}

                                        <div class="flex flex-col items-center">
                                            {/* <!-- top line --> */}
                                            <div class="flex-1 w-0.5  bg-[#F2F4F8]"></div>
                                            {/* <!-- VS text --> */}
                                            <span class="px-1 py-1 my-1 bg-blue-500 rounded-[3px] text-white">VS</span>
                                            {/* <!-- bottom line --> */}
                                            <div class="flex-1 w-0.5 bg-[#F2F4F8]"></div>
                                        </div>


                                        {/* Right product */}

                                        <div>

                                            <div>
                                                <img className='object-cover w-full' src={item.image2} alt="product1" />
                                            </div>

                                            <CardTitle className="mt-4" >{item.title2}</CardTitle>

                                            <div className='mt-8 flex items-center gap-x-3'>

                                                <h2 className='text-[#D51E0B] font-bold text-[22px]'>{item.price2} ৳

                                                </h2>

                                                <h2 className='line-through text-[#667092] text-[18px]'>{item.oldPrice2} ৳

                                                </h2>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <Button className="w-full"> Full Comparison </Button>
                                    </div>

                                </Card>

                            </Link>
                        )
                        )
                    }

                </div>

            </div>



        </>
    );
};


export default FeaturedComparisons;