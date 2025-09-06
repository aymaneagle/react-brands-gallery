import React, {useEffect, useState} from 'react';
import BrandsCard from "./BrandsCard.jsx";
import axios from "axios";

const BrandsSection = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        axios.get("/brands.json").then((res)=>setBrands(res?.data));
    },[])
    console.log(brands);
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold"> Favourite Brands </h1>
                <p className="text-2xl  text-muted/20"> Buy from your favourite brands</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
                {brands.map((brand) => (
                    <BrandsCard key={brand?.id} brand={brand} />
                ))}
            </div>
        </div>

    );
};

export default BrandsSection;