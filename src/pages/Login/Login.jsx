import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";


function Login() {


  const navigate = useNavigate();

  const { login } = useAuth();



  const [showPassword,setShowPassword] = useState(false);



  const [formData,setFormData] = useState({

    email:"",
    password:"",

  });





  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value,

    });

  };







  const handleLogin = (e)=>{

    e.preventDefault();



    if(!formData.email || !formData.password){

      toast.error(
        "Please fill all fields"
      );

      return;

    }





    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];






    const existingUser =
      users.find(

        (user)=>

        user.email === formData.email &&

        user.password === formData.password

      );







    if(!existingUser){


      toast.error(
        "Invalid Email or Password"
      );


      return;


    }







    const loggedInUser = {

      name: existingUser.name,

      email: existingUser.email,

      password: existingUser.password,

    };







    // Save user using AuthContext

    login(loggedInUser);





    toast.success(
      `Welcome ${existingUser.name} 🎉`
    );



    navigate("/");


  };






return(


<div className="
min-h-screen
bg-gray-100
flex
justify-center
items-center
px-4
">


<div className="
bg-white
shadow-xl
rounded-xl
p-8
w-full
max-w-md
">



<h1 className="
text-4xl
font-bold
text-center
">

Sign In

</h1>



<p className="
text-center
text-gray-500
mt-2
mb-8
">

Login to your Amazon Clone account

</p>





<form

onSubmit={handleLogin}

className="space-y-5"

>




<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

className="
w-full
border
border-gray-300
p-3
rounded-lg
outline-none
focus:ring-2
focus:ring-yellow-400
"

/>








<div className="relative">


<input

type={
showPassword
?
"text"
:
"password"
}

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

className="
w-full
border
border-gray-300
p-3
rounded-lg
outline-none
focus:ring-2
focus:ring-yellow-400
"

/>




<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-4
text-gray-500
"

>


{
showPassword
?
<FaEyeSlash/>
:
<FaEye/>
}


</button>



</div>







<button

type="submit"

className="
w-full
bg-yellow-400
hover:bg-yellow-500
py-3
rounded-lg
font-bold
transition
"

>

Sign In

</button>






</form>






<div className="
text-center
mt-8
">


<p className="text-gray-600">

Don't have an account?

</p>



<Link

to="/register"

className="
text-blue-600
font-semibold
hover:underline
"

>

Create Account

</Link>



</div>





</div>


</div>


);


}


export default Login;