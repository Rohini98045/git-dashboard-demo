import { Link } from "react-router-dom";

function SideNav() 
{
  const userJson = localStorage.getItem("user");
  const {usertype} = JSON.parse(userJson);

  const options={
    ADMIN:[
      {label:"Add Employee",  to:'/dashboard/addemployee'},
      {label:"View Employee",  to:'/dashboard/viewemployee'}
    ],
    CRM:[
      {label:"Add Enquiry",  to:'/dashboard/addenquiry'},
      {label:"View Enquiry",  to:'/dashboard/viewenquiry'}
    ],
    Customer:[
      {label:'ViewProfile', to:'/dashboard/viewprofile'},
      {label:'UpdateProfile',to:'/dashboard/updateprofile'},
      {label:'Logout' ,to:'/dashboard/logout'}
    ]
  }

  return (
    <div>
        <h2>SideNav</h2>
       <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        {
          
          options[usertype].map((btn,index)=> <Link className="btn btn-success m-2 w-60" key={index} to={btn.to}>{btn.label}</Link>)
        }
        </div>
    </div>
  )
}

export default SideNav;