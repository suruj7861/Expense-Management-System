import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ProtectedRoute() {
  const navigate = useNavigate() 
useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
    }
    else{
      navigate('/login')
    }
},[navigate])

  return (
  <>

  </>
  )
}

export default ProtectedRoute;
