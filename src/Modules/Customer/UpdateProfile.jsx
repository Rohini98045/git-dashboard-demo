import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';

function UpdateProfile(){
    const{register,handleSubmit,reset,setValue} =useForm();

    const userJson = localStorage.getItem("user");
    const {username,uid,name,usertype,image} = JSON.parse(userJson);

setValue('uid',uid);
setValue('name',name);
setValue('username',username);
setValue('password',password);
setValue('usertype',usertype);


    function updateEmployee(data){
        const employeeDetails={
       uid:data.uid,
       name:data.name,
       username:data.username,
       password:data.password,
       usertype:data.usertype,
       }
       
       const formData=new FormData();
       formData.append("empjson",JSON.stringify(employeeDetails));
       formData.append("image",data.image[0]);
     
       console.log(data)
       axios.put(`http://localhost:9095/updateDataImage/${uid}`,formData)
       .then(response=>console.log(response.data))
     }

    return (
        <div>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit(updateEmployee)}>
        
        <label className='fs-4 form-label'>Enter Id:-</label>
        <input type='number' className='form-control' {...register("uid")}/>
        
        
        <label className='fs-4 form-label'>Enter Name:-</label>
        <input type='text' className='form-control' {...register("name")}/>
        
        
        <label className='fs-4 form-label'>Enter UserName:-</label>
        <input type='text' className='form-control' {...register("username")}/>
        
        
        <label className='fs-4 form-label'>Enter Password:-</label>
        <input type='text' className='form-control' {...register("password")}/>
        
        
        <label className='fs-4 form-label'>Enter UserType:-</label>
        <input type='text' className='form-control' {...register("usertype")}/>
        
        
        <label className='fs-4 form-label'>image</label>
        <input type='file' className='form-control' {...register("image")}/>
        
        <button className='w-25 btn btn-success fs-4 mt-2'>Submit</button>
 
         </form>
        </div>
      )
}
export default UpdateProfile;