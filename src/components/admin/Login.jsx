import React from 'react';
import LogoImage from '../../assets/images/movinghomeLogo.jpg';


export default function Login({setIsUserLoggedIn}) {
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
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-4">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn bg-custom-color text-light" onClick={()=>{setIsUserLoggedIn(true)}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
