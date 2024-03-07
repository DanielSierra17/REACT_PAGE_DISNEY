import React from 'react';
import './home.css';
import categoryData from '../../category.json';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className='cards-home'>
                {categoryData.categories.map((categories) => (
                    <Link
                        className='card-content'
                        key={categories.id}
                        to={`/contentCategory/${categories.id}`}
                    >
                        <div className='block'>
                            <img src={categories.img} alt='categoria' />
                            <p>{categories.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;