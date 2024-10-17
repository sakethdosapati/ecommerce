import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <h1>FakeStore</h1>
            <div id="navdiv">
            <Link to="/login"><button id="b1">Log in</button> </Link>
            <Link to="/signup"><button id="b2">Join    </button></Link>
               
            </div>
        </nav>
    )
}