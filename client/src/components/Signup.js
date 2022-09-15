import React from 'react'
import '../styles/Signup.css'
import axios from '../functions/axios.js'

function Signup() {
    // const [user, setUser] = useState({
    //     Username: "",
    //     FullName: "",
    //     Email: "",
    //     Password: ""
    // });

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    async function postData(){
        await axios.post('/user');
    }

    return (
        <div class='container d-flex flex-column align-items-center justify-content-center vh100'>
            <h1 class='font-style mb-4'>SocioLyf</h1>

            <form class='width30' method='post' action={postData}>
                <div class="form-group">
                    <input type='text' class="form-control" name='Username' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name='FullName' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name='Email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name='Password' id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name='ConfirmPassword' id="exampleInputPassword1" placeholder="Confirm Password" />
                </div>
                <div class='d-flex justify-content-center'>
                    <button type="submit" class="btn btn-outline-primary btn-lg">Sign Up 🤩</button>
                </div>
            </form>

            <div class='mt-2'>
                Already have an account🤔? <a href="#" class="alert-link">Login here</a>.
            </div>
        </div>

    )
}

export default Signup

/*
Username
Full Name
Email
Password
Confirm password
*/