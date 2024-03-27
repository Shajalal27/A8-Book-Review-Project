
import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.png'

const Banner = () => {

    
    return (
        <div className="card lg:card-side bg-gray-100 max-w-7xl mx-auto flex-col-reverse mt-6 ">
            <div className="card-body  justify-center">
                <h2 className="card-title text-6xl font-bold pl-16 ">Books to freshen up <br/>
                 your bookshelf</h2>
                
                <div className="card-actions justify-start pl-16 pt-10">
                    <Link to='/listed-books'  className="p-3 rounded-lg font-medium bg-[#23BE0A] text-white">View The List</Link>
                </div>
            </div>
            <div>
            <figure><img className='pr-24' src={bannerImg} alt="Album"/></figure>
            </div>
        </div>
    );
};

export default Banner;