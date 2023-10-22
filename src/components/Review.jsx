import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Review(){
  return(
    <section id="reviews">
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <h3> Very good e book app. Great experience. The offers they provide in the middle are just awesome as it may give a huge discount that we cannot imagine. I purchased some books with heavy discounts that came to normal once again.</h3>
    <img src="bookishImages/pp1.jpg" alt="profile" className="profile-picture" />
    <span>Kavita Sharma</span>
  </div>
  <div className="carousel-item">
    <h3>It does provide some added technological perks like fast browsing and page finding. easier to swipe a direction than wet your fingers and flip through the pages. So far, it deserves a 5 star rating, as it allows me to read a book and doesnt turn the txt into hyroglyphs or make it unreadable.</h3>
    <img src="bookishImages/pp4.png" alt="profile" className="profile-picture"/>
  <span>demoxyzee</span>
  </div>
  <div className="carousel-item">
  <h3>Awesome app. Love how they work and scan the entire web to find a place for you to sell your books. Exactly the app I was looking for Bravo thank you so much!</h3>
  <img src="bookishImages/pp3.jpg" alt="profile" className="profile-picture" />
  <span>Demoxyzee</span>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

  </section>
  );

}

export default Review;