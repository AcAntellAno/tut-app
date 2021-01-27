import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [name, setName] = useState('mario');

    useEffect(() => (
        //  runs when data changes
        //  could fetch data, communicate with auth services, etc
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                // console.log(data)
                setBlogs(data)
            })
    ), []);

    return ( 
        <div className="home">
          <button onClick={() => setName('luigi')}>Change Name</button>
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
          <p>{name}</p>
        </div>
     );
}
 
export default Home;