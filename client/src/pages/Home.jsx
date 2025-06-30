import './Home.css'
import Login from '../components/Login'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div className="home-page"> 
            <div className="navbar">
                <Navbar> </Navbar>
            </div>
            <div className="login">
                <Login />
            </div>
        </div>
    );
};