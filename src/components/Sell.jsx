import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Sell(){
    return(
        <section id="sell-book">
        <div className="sell">
          <br /><br />
          <h1>Done with reading a book?</h1>
          <h2>Sell it On Bookish</h2>
          <p>Get a best price for your book or donate it free for the needy ones</p>
          <img src="bookishImages/giphy1.gif" alt="Sell_giphy" className="Sell_Giphy" width="15%" height="15%"></img>
          <br></br><br></br><button>Get A Price</button>
          <button type="button" name="button"> Donate for Free</button>
          <br /><br />
        </div>
  
      </section>
    );
}

export default Sell;