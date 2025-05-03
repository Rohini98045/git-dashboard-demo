import {useForm} from "react-hook-form";
import axios from 'axios';

function AddEmployee() 
{
  
  const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();

  
// function saveData(data){
//   axios.post("http://localhost:9095/savedata",data)
//   .then(()=>{
//     console.log(data);
//         alert('Employee Data save Successfully');
//         reset();

//   })


function onRegister(data){
  const UserDetails={
  uid:data.uid,
  name:data.name,
  username:data.username,
  password:data.password,
  usertype:data.usertype,
  
  }
  const formData=new FormData();
  formData.append("userjson",JSON.stringify(UserDetails));
  formData.append("image",data.image[0]);

  console.log(data)
  axios.post("http://localhost:9095/saveDataImage",formData)
  .then(response=>console.log(response.data))
}
  return (
    <>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit(onRegister)}>
        
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
        </>
  )
}

export default AddEmployee;