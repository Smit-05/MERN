import React from 'react'
import '../styles/Signup.css'

function Signup() {
    return (
        <div class='container d-flex flex-column align-items-center justify-content-center vh100'>
            <h1 class='font-style mb-4'>SocioLyf</h1>

            <form class='width30'>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email / Username"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class='d-flex justify-content-center'>
                    <button type="submit" class="btn btn-outline-primary btn-lg">Login 😉</button>
                </div>
            </form>

            <div class='mt-2'>
                Don't have an account😢? <a href="#" class="alert-link">Sign Up</a>.
            </div>
        </div>

    )
}

export default Signup

/*
Full Name

*/