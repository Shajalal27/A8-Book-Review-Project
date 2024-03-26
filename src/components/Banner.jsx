import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="card card-side max-w-7xl mx-auto bg-gray-100">
            
            <div className="card-body pl-24">
                <h2 className="card-title lg:text-6xl text-4xl font-extrabold">Books to freshen up <br />
                your bookshelf</h2>
               
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
           <div className=''>
            <figure><img className="pr-36" src={bannerImg} alt="Movie"/></figure>
           </div>
        </div>
    );
};

export default Banner;