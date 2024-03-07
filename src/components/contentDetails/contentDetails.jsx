import React from 'react';
import './contentDetails.css';
import categoryData from '../../category.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContentDetails = () => {
    const { id } = useParams();

    const categoryID = categoryData.categories.find((category) => category.id === parseInt(id));

    return (
        <div className='content-dt'>
            <div className='content-details'>
                <p><strong>Video:</strong><iframe src={categoryID.video} frameborder="0"></iframe></p>
                <p><strong>Sinopsis:</strong> {categoryID.synopsis}</p>
                <p><strong>Imagen:</strong><img src={categoryID.img} alt='categoria' /></p>
                <Link className='button' to="/home" > Regresar</Link>
            </div>
        </div>
    );
}

export default ContentDetails;
