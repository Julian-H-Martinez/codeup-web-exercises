//  in react we are building entire page via js

// ReactDOM.render(
//     <h1>Hello, World!!!</h1>,
//     document.querySelector("#root")
// );
// ReactDOM.render(
//     <p>I'm starting to learn REACT all over again! Let's Goooooooo!!!</p>,
//     document.querySelector("#root")
// );
// ReactDOM.render(
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//         <li>Thing 3</li>
//     </ul>,
//     document.getElementById("root")
// );

// function NavBar(){
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Link</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
//                                aria-expanded="false">
//                                 Dropdown
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li><a className="dropdown-item" href="#">Action</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li>
//                                     <hr className="dropdown-divider"/>
//                                 </li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled">Disabled</a>
//                         </li>
//                     </ul>
//                     <form className="d-flex">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return(
//         <h1>I'm learning React!!!</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//             <NavBar />
//             <MainContent />
//     </div>,
//     document.querySelector("#root")
// );

// //  Imperative Programming
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to code.";
// h1.className = "header";
// document.querySelector("#root").append(h1);
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

const nav = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h1 className="navbar-brand" ref="#">HappyTimes</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    {/*<li className="nav-item dropdown">*/}
                    {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"*/}
                    {/*       aria-expanded="false">*/}
                    {/*        Dropdown*/}
                    {/*    </a>*/}
                    {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                    {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                    {/*        <li>*/}
                    {/*            <hr className="dropdown-divider"/>*/}
                    {/*        </li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a className="nav-link">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
)

ReactDOM.render(
    nav,
    document.querySelector("#root")
);
