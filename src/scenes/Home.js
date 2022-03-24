import Signup from "../components/Signup";
import Login from "../components/Login";
import Services from "../components/Services";

const Home = () => {
    return ( 
        <>
        <div>
        <h1  className="header">Login or Signup to track your spending!</h1>
       
        </div>
        <div  className='login' >
            <Login />
        </div>
        <div className='signup'>
            <Signup  />
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Services className='services' />
        </div>
        </>
     );
}
 
export default Home;