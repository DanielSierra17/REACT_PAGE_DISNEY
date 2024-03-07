import categoryData from '../../category.json';
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <div className='container-nav'>
            {categoryData.categories.map((categori) => (
                <Link
                    className='item-nav'
                    key={categori.id}
                    to={`/contentDetails/${categori.id}`}
                >
                    <p>{categori.name}</p>
                </Link>
            ))}
        </div>
    )
}