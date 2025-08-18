import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import React from 'react';


const data = [
    {
        id: 1,
        title: "Gree 1 Ton Muse-Split Non-Inverter AC",
        image: "https://i.ibb.co.com/B5L5bqvC/product1.webp",
        price: 42640,
        oldPrice: 52000
    },

    {
        id: 2,
        title: "MSI MEG Ai1600T PCIE5 1600W 80 Plus Titanium Fully Modular Power Supply",
        image: "https://i.ibb.co.com/sv4pk2Zp/product2.webp",
        price: 81999,
        oldPrice: 21000
    },

    {
        id: 3,
        title: "AMD Ryzen 7 7700 Budget Gaming Desktop PC",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 81999,
        oldPrice: 32000
    },

    {
        id: 4,
        title: "AMD Ryzen 5 3400G Processor Desktop PC",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },
    {
        id: 5,
        title: "DJI Osmo Action 5 Pro Adventure Combo Action Camera",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },

    {
        id: 6,
        title: "XINJI NOTHING 2 Smart Watch",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },
    {
        id: 7,
        title: "MSI MPG 491CQPX QD-OLED 49\" DQHD 240Hz Curved Gaming Monitor",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },

    {
        id: 8,
        title: "AOC AGON PRO AG276FK 27\" 520Hz FHD Fast IPS Gaming Monitor",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },

    {
        id: 9,
        title: "AOC AGON PRO AG276QKD 26.5\" 480Hz QHD OLED Gaming Monitor",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    },

    {
        id: 10,
        title: "Hikvision DS-D5B65RB/EL 65\" 4K UHD 128GB Storage Interactive Flat Panel",
        image: "https://i.ibb.co.com/xyz12345/product3.webp",
        price: 28999,
        oldPrice: 32000
    }

];



const FeaturedProductsComponents = () => {


    return (

        <>

            <div className='mt-[67px]'>

                <div>

                    <h1 className='flex justify-center text-[20px] font-[700]'>Featured Products</h1>
                    <p className='flex justify-center text-[15px] font-[400]'>Check & Get Your Desired Product!</p>
                </div>

                <div className='mt-[35px] grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4  gap-y-3'>

                    {

                        data.map((item, i) => (

                            <Card key={i} className="w-[250px] border-none rounded-[5px]">

                                <CardContent>

                                    <div>
                                        <img className='object-cover w-full' src={item.image} alt="product1" />
                                    </div>
                                </CardContent>


                                <CardHeader>
                                    <CardTitle >{item.title}</CardTitle>

                                </CardHeader>

                                <CardFooter>

                                    <div className='flex items-center gap-x-3'>

                                        <h2 className='text-[#D51E0B] font-bold text-[22px]'>{item.price} ৳

                                        </h2>

                                        <h2 className='line-through text-[#667092] text-[18px]'>{item.oldPrice} ৳

                                        </h2>

                                    </div>




                                </CardFooter>
                            </Card>

                        ))
                    }

                </div >

            </div>

        </>
    );
};

export default FeaturedProductsComponents;