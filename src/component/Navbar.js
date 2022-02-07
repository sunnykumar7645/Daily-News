import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand mx-4" to="Daily-News/"><h1>Daily News</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Daily-News/general">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-3" to="Daily-News/">About us</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="Daily-News/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="Daily-News/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="Daily-News/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="Daily-News/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="Daily-News/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="Daily-News/technology">Technology</Link></li>
                        
                    </ul>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className='nav-item'>
                                <a className="nav-link" to="/business">Business</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/entertainment">Entertainment</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/general">General</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/health">Health</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/science">Science</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/sports">Sports</a>
                                </li>
                            <li className='nav-item'>
                                <a className="nav-link" to="/technology">Technology</a>
                                </li>

                        </ul>
                    </li>     */}


                   
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
            
      
    </>
    )
  }
}

export default Navbar
