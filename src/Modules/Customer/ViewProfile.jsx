import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";

function ViewProfile(){
      
    const userJson = localStorage.getItem("user");
    const {username,uid,name,usertype,image} = JSON.parse(userJson);
    const navigate = useNavigate();


    function getexit(){
        alert("Are you sure you want to login");
        localStorage.clear();
        navigate('/login');
      }
 
    return (
        
        <div>
       <h1 style={{textAlign:"center"}}>Customer Data</h1>
       <table className='table table-hover'  style={{margin:'auto', textAlign:'center',marginTop:'50px'}}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Usertype</th>
            <th>Profile Image</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    <td>{uid}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{usertype}</td> 
                    <td><img src={'data:image/jpeg;base64,'+image} height={50} width={50}/></td>
                    </tr> 
                   </tbody>
    </table>
    <button onClick={getexit}>Log Out</button>

        </div>
      )
}
export default ViewProfile;