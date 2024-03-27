/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import ratingIcon from '../assets/rating.png'


const CardBooks = ({item}) => {
    console.log(item);

    const{id, img, tags, bookName, author, category, rating}= item || {};
    return (
        
        <Link to={`/books-details/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl border-2 rounded-lg p-4">
                
                <figure className='bg-gray-100 p-4 rounded-lg'><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="badge badge-secondary">{tags}</div>
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p className="text-xl font-medium pb-2">By: {author}</p>
                    <div className="card-actions justify-between border-t-2 border-dashed pt-4">
                        <div className="">{category}</div> 
                        <div className="flex
                        gap-3"><span>{rating}</span><img src={ratingIcon} alt="" /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardBooks;