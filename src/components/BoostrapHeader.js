import React from 'react'
import Logo from '../img/logo.svg'
const BoostrapHeader = () => {
    return (
        <>



            { /* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            { /* Bootstrap CSS */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <title>Hello, world!</title>
            <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Josefin+Sans:ital@1&family=Mukta:wght@200;300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:wght@300&display=swap');
`}</style>
            <style>{`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
        overflow-x: hidden;
    }
    .contactus{
        width: 126px;
        height: 52px;
        background: #D97D52;
        border-radius: 6px;
    }
   
`}</style>




            { /* Navbar start here */}

            <nav className="navbar navbar-expand-lg navbar navbar-light ml-auto fixed-top border px-5 " style={{ backgroundColor: "#FFFFFF" }}>
                <img src={Logo} alt="BookImg" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Career</a>
                        </li>
                        <button className="btn btn-group-lg contactus btn-sm btn-block">Contact us</button>
                    </ul>

                </div>
            </nav>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />


        </>
    )
}

export default BoostrapHeader