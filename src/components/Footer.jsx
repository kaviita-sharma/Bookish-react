import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Footer(){
    return(
        <section id="Footer">
        <div className="footer bg-light">
          <div className="row">
            <div className="col-lg-6 s-form ">
              <h3 className="zero-margin">Subscribe For daily Updates</h3>
              <form className="subscription-form" action="" method="">
                <label className="field" for="Name">Enter full name</label>
                <input type="text" name="" value="" /><br />
                <label className="field" for="email">Enter Email Id</label>
                <input type="email" name="" value="" /><br />
                <input type="submit" name="" value="Submit" />
              </form>
            </div>
            <div className="col-lg-6 address">
              <address>
                  Written by <a href="mailto:sharmakavita2501@gmail.com">Kavita Sharma</a><br />
                  Visit us at: xyzeee store, near abc place, New Delhi, 234567
                  Example.com
              </address>
              <a href="#facebook"className="social-media-icon"><i class="fa-brands fa-facebook"></i></a>
              <a href="#twitter" className="social-media-icon"><i class="fa-brands fa-twitter"></i></a>
              <a href="#instagram"className="social-media-icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="#linkedin"className="social-media-icon"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
  
          </div>
        </div>
        <div class="copywright bg-light">
          <p class="zero-margin">copywright | 2022 @Bookish</p>
        </div>
      </section>
    );
}

export default Footer;