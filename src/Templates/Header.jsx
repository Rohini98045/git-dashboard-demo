import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
function Header() 
{

  return (
    <div className='bg-dark p-2 d-flex justify-content-around'>
        {/* <h2>Header</h2>    */}

        <Link className='btn btn-light' to='/'>HOME</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/about'>ABOUT</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/contact'>CONTACT</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/login'>LOGIN</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Header;