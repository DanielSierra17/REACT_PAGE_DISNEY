import React from 'react';
import './contentCategory.css';
import categoryData from '../../category.json';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ContentCategory = () => {
    const { id } = useParams();

    const categoryID = categoryData.categories.find((category) => category.id === parseInt(id));

    return (
        <div className='content-ct'>
            <div className='category-details'>
                <p><strong>Nombre:</strong> {categoryID.name}</p>
                <p><strong>Descripción:</strong> {categoryID.description}</p>
                <p><strong>Imagen:</strong> <img src={categoryID.img} alt="" /></p>
                <p><strong>Títulos:</strong></p>
                <ul className='category-titles'>
                    {categoryID.titles.map((title, index) => (
                        <li className='category-list' key={index}>{title}</li>
                    ))}
                </ul>
                <Link className='button' to="/home" > Regresar</Link>
                <Link className='button' to={`/contentDetails/${id}`} > Ver Más</Link>
            </div>
        </div>
    );
}

export default ContentCategory;
