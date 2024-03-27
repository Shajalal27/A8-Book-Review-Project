import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { saveToLocalStorage } from "../Utils/localStorage";




const BooksDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const {id} = useParams();
    const {data, loading} = useBooksData();

    const handleRead = () =>{
        saveToLocalStorage(singleBook);
    };

    useEffect( () =>{
        if(data){
            const singleBook = data.find(item => item.id == id);
            // console.log(singleBook);
            setSingleBook(singleBook);
        }
    }, [data, id])

    const {img, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleBook || {};
    return (
        <div className="hero  bg-base-200 max-w-7xl mx-auto pt-6">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1">
               <div className="lg:pr-36 lg:pb-6 pb-36">
                    <img src={img} className="h-[500px] max-w-80 " />
               </div>
             <div className="mt-20">
                <h1 className="text-5xl font-bold -mt-48">{bookName}</h1>
                <p className="mt-6 border-b-2 text-xl font-medium">By: <span className=" border-b-2 text-2xl font-bold">{author}</span> </p>
                <p className="mt-4 border-b-2 text-xl"> {category}</p>
                <h3><span className="text-xl font-bold mt-8">Review:</span> {review}</h3>
                <h4 className="border-b-2 mt-8 pb-2"><span className="text-xl font-bold mt-8">Tags:</span>{tags}</h4>
                <div className="pt-3">
                    <div className="">
                        <p className="w-[400px] ">Number of Pages<span className="pl-12 text-xl font-semibold">: {totalPages}</span></p>
                    </div>
                    <div className="">
                         <p className="w-[500px] ">Publisher<span className="pl-[108px] text-xl font-semibold ">: {publisher}</span></p>
                    </div>
                    <div>
                     <p>Year of Publishing<span className="pl-12 text-xl font-semibold">: {yearOfPublishing}</span></p>
                     </div>
                    <div>
                     <p>Rating<span className="pl-[128px] text-xl font-semibold">: {rating}</span></p>
                    </div>
                </div>
               <div className="flex gap-4 mt-6">
                    <button onClick={handleRead} className="btn btn-outline">Read</button>
                    <button className="btn bg-[#38bdf8]">Wishlist</button>
               </div>
              </div>
            </div>
        </div>
    );
};

export default BooksDetails;