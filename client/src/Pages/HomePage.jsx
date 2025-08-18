import FeaturedProducts from '@/Components/AllComponents/ForHomePage/FeaturedProductsComponents';

import React from 'react';
import Layout from './Layout';
import FeaturedCategory from '@/Components/AllComponents/ForHomePage/FeaturedCategory';
import ServiceAndComplain from '@/Components/AllComponents/ForHomePage/ServiceAndComplain';


const HomePage = () => {

    return (

        <>


            <Layout>

                <FeaturedProducts />
                <FeaturedCategory />
                <ServiceAndComplain />


            </Layout>








        </>
    );
};

export default HomePage;