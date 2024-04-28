import React, {useState} from 'react';
import LogoImage from '../../assets/images/movinghomeLogo.jpg';
import axios from 'axios';
import Swal from "sweetalert2";
export default function Login({setIsUserLoggedIn}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
           

            const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/Adminlogin', { email: email, password: password });
            console.log(response.data.success);
            if(response.data.success){
                Swal.fire({
                    title: 'success',
                    text: "Sucessfuly Login Your Account",
                    icon: "success",
                  });
                setIsUserLoggedIn(true);
            }else{
                Swal.fire({
                    title: 'error',
                    text: "Incorrect Email Or Password",
                    icon: "error",
                  });
            }

            
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'error',
                text: error,
                icon: "error",
              });
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <figure className='d-flex align-items-center justify-content-center'>
                                <img src={LogoImage} className="card-img-top rounded-circle w-25" alt="Logo" />
                            </figure>
                            <form>
                                <div className="mb-4">
                                    <label for="username" className="form-label">Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                                </div>
                                <div className="mb-4">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn bg-custom-color text-light" onClick={(e)=>{handleLogin(e)}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
