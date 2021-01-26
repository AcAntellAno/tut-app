import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => (
        //  runs when data changes
        //  could fetch data, communicate with auth services, etc
        console.log('use effect ran'),
        console.log(name)
    ), [name]);

    return ( 
        <div className="home">
          <button onClick={() => setName('luigi')}>Change Name</button>
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
          <p>{name}</p>
        </div>
     );
}
 
export default Home;