// import './App.css'

// function Navbar() {
//     return (
//         <div>
//             <h1>Here is the Navbar</h1>
//         </div>
//     )
// }

// export default Navbar;

//  Stateless Functional Component done w/arrow functions

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{ 
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                 }}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;