import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Homepage(){
    return(
    <section  className="body">
      <div className="n_book"><br /><br />
        <h1>Need A Book?</h1>
        <h2>No Worries we got you covered</h2>
        <p> Bookish know the struggle behind finding our desired book at justifed price, so we deliver your desired book at your doorstep</p>
        <p>Buy Or Sell a book</p>
        <img src="bookishImages/giphy.gif" alt="giphy" className="homepage_Img" width="15%" height="20%"></img>
        <br></br><br></br><button type="button" className="btn btn-light yellow">New Edition</button>
        <button type="button" className="btn btn-light yellow"> Old Edition</button>
        <br></br><br></br><br></br>
      </div>

    </section>
    );
}

export default Homepage;