
/* eslint-disable react/prop-types */
import publishImg from '../assets/year.png';
import publisherImg from '../assets/publisher.png';
import pageImg from '../assets/page.png';

import { Link } from 'react-router-dom';

const WishListBooks = ({data}) => {
    const{ img, tags, bookName, author, category, rating, yearOfPublishing, totalPages, publisher}= data || {};
    return (
        <Link to={`/wishList-books`} className="card lg:card-side bg-base-100 border-2  mb-6 ">
            <figure className='bg-gray-100 p-6 rounded-lg'><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                    <h4 className='text-lg font-medium'>By:<span className='text-[#4b5563] font-bold'> {author}</span> </h4>
                </div>
                <div className='flex'>
                    <p className='text-2xl font-semibold'>tags: 
                    <span className='text-green-500 p-1 ml-4 rounded-xl bg-slate-200'> #{tags}</span></p>
                    <p className='flex text-lg font-medium text-gray-500'><img src={publishImg} alt="" />Year of Publishing: <span> {yearOfPublishing}</span></p>
                </div>
                <div className='flex gap-5 text-[#B0B0B0] font-medium border-b-2 pb-2'>
                    <div>
                        <img src={publisherImg} alt="" />
                    </div>
                    <div>
                        <p>Publisher:<span> {publisher}</span> </p>
                    </div>
                    <div>
                        <img src={pageImg} alt="" />
                    </div>
                    <div>
                        <p>Page:<span> {totalPages}</span></p>
                    </div>
                </div>
                <div className='flex gap-6 justify-around'>
                    <p className=' p-1 rounded-lg bg-[#E0EEFF] text-[#0284c7] font-medium'>Category:<span> {category}</span> </p>
                    <p className='mr-[600px]  p-1 rounded-lg bg-red-100 text-[#0284c7] font-medium'>Rating:<span> {rating}</span> </p>
                    
                </div>
                <div className='bg-green-500 w-28 text-white font-medium p-2 rounded-xl'>
                    <button className=''>View Details</button>
                </div>
            </div>
        </Link>
                );
};

export default WishListBooks;


