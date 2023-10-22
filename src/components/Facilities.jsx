import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Facilities(){
  return(
    <section id="facilities">
    <div className="row bg-light facility">
      <div className="col-lg-4 spacing">
          <i className="fa-sharp fa-solid fa-circle-check fa-3x icon"></i><br />
          <h3>Easy to use</h3>
          <p>Easy to use with just one click</p>
      </div>
      <div className="col-lg-4 spacing">
          <i className="fa-solid fa-user-check fa-3x icon"></i><br />
          <h3>Customer Satisfactiion</h3>
          <p> We provide 100% customer satisfaction</p>
      </div>
      <div className="col-lg-4 spacing">
          <i className="fa-solid fa-truck fd fa-3x icon"></i>
          <h3>Fastest Delivery</h3>
          <p>We give fastest delivery to our customer</p>
      </div>
    </div>
  </section>
  );

}


export default Facilities;