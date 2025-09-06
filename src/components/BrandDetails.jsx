import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const BrandDetails = () => {
    const {brandId} = useParams();
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        axios.get("/brands.json").then((res)=>setBrands(res.data));
    },[brandId])
    const brandData = brands?.find(brand => String(brand.id) === brandId);

   //  console.log(brands);
   // console.log(brandId);
    if (!brandData) {
        return <p className="text-center mt-10">Loading brand details...</p>;
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={brandData?.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{brandData?.title}</h1>
                    <p className="py-6">
                        {brandData?.description}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default BrandDetails;