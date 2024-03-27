/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
    const [books, setBooks] = useState([]) ;
    const [pages, setPages] = useState([]);

    useEffect( () =>{
        const fetchData = async () =>{
            const res = await fetch("/data.json");
            const data = await res.json();

        const bookNames = [];
        const totalPages = [];

        data.forEach(item =>{
            bookNames.push(item.bookName);
            totalPages.push(item.totalPages);
        });

        setBooks(bookNames);
        setPages(totalPages);
        };
        fetchData();
    }, [])
    const data = books.map((book, index) =>({
        name: book,
        uv: pages[index],
    }));
    
    


  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
    return (
        
        <BarChart className="max-w-7xl mx-auto mt-10 mb-6"
      width={1100}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: -30,
        left: -30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" className='p-6'/>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    );
};

export default PagesToRead;