import useBooksData from "../Hooks/useBooksData";
import CardBooks from "./CardBooks";



const CategoryList = () => {
    const {data, loading} = useBooksData();
    console.log(data)
    return (
       <div>
            <div className="text-4xl font-bold mt-12">
                <h2 className="text-center">Books</h2>
            </div>
            <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
            
            {
                data.map((item) =>(
                   <CardBooks key={item.id} item={item}/>
                ))
            }
            </div>
       </div>
    );
};

export default CategoryList;