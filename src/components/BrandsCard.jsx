import React from 'react';
import {Link} from "react-router-dom"

const BrandsCard = ({ brand }) => {
    const { title, image, description, id } = brand;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="flex justify-center items-center p-4">
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-contain"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">

                    <Link to={`/brands/${id}`} className="btn btn-primary">Buy now</Link>
                </div>
            </div>
        </div>
    );
};

export default BrandsCard;
