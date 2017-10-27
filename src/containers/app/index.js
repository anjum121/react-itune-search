import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import Favourite from '../favourite'

const App = () => (
    <div>
        <div id="mySidenav" className="sidenav">
            <div  className="closebtn" onClick={closeNav}>&times;</div>
            <Link to="./" onClick={closeNav}>Home</Link>
            <Link to="./favourite" onClick={closeNav}>Favourite</Link>
        </div>

        <main id="main">
            <span className='pushMenu' onClick={openNav}>&#9776;</span>
            {/*<Route exact  path="/react-itune-search/" component={Home}/>*/}
            {/*<Route exact path="/react-itune-search/favourite" component={Favourite}/>*/}
            <Route exact  path="/" component={Home}/>
            <Route exact path="/favourite" component={Favourite}/>
        </main>
    </div>
);


// I Know its dirty but for quick demo i thing i can do this
let openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.marginRight = "-250px";


};

let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
};


export default App