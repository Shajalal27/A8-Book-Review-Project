import useLocalStorageData from "../Hooks/useLocalStorageData";
import ReadBook from "../components/ReadBook";
import WishListBooks from "../components/WishListBooks";



const ListedBooks = () => {
    const {localData} = useLocalStorageData();
    console.log("local",localData);
    return (
        <div className="max-w-7xl mx-auto mt-6">
            <div className=" bg-gray-100 rounded-md p-4">
                <h2 className="text-3xl font-bold text-center items-center">Books</h2>
            </div>  
            <div className=" flex justify-center items-center  pt-10 pb-24">
                    <ul className="menu menu-horizontal  dropdown bg-[#23BE0A] rounded-lg "> 
                        <li>
                            <details>
                            <summary className="text-xl font-medium">Short By</summary>
                            <ul className="p-2">
                                <li><a>Rating </a></li>
                                <li><a>Pages </a></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
            </div>
            
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                 {
                    localData.map( (data) => 
                    <ReadBook key={data.id} data={data}/>
                    )
                }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                    localData.map( (data) => 
                    <WishListBooks key={data.id} data={data}/>,
                   )
                }
                </div> 
            </div>
        </div>
    );
};

export default ListedBooks;