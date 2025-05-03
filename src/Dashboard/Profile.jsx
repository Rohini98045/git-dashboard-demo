
function Profile() 
{

  const userJson = localStorage.getItem("user");
  const {username,usertype,image} = JSON.parse(userJson);

  return (
    <div>
        <h2>Profile</h2>
        <h4>{username}</h4>
        <h4>{usertype}</h4>
        <h4><img src={'data:image/jpeg;base64,'+image} height={50} width={50}/></h4>
    </div>
  )
}

export default Profile;