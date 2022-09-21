import React from "react";
import {Link} from "react-router-dom";


const Navbar = ()=> {
  
  
  // handleclick=async()=>{
  //   console.log("clicked");
  //   let p = document.getElementById("searchbtn");
  //   let url= `https://newsapi.org/v2/everything?&q=${p.innerHTML}&country=in&apiKey=f9b0a36ddc15450998dd5f25f5b5aebc&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedata= await data.json();
  //   console.log(parsedata);
  //   this.setState({articles: parsedata.articles,
  //   totalResults: parsedata.totalResults,
  //   loading:false})
  // }

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            News-Update
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">general</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">science</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link></li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchbtn"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                id=""
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar;
