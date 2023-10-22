import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import jonour from "../jonour";


function Jonour(){
    return(
    <section id="jonour">
    <div className="jonour bg-light container-fluid"><br />
    <h2>Choose Your Jonour</h2>
    <br /> 
      <div className="row space">
      {jonour.map(JImages => (
                <Jonours
                    key={JImages.key}
                    source={JImages.Source}
                    Alt={JImages.Alt}
                    title={JImages.Title}
                    color={JImages.Color}

            />
            )
            )}
      </div>
   </div>
  </section>
    );
}
function Jonours(props){
  return(
    <div className="col-lg-2 col-md-4 col-sm-6 black-text picture-border" style={props.color}>
        <img src={props.source} alt={props.Alt} className="dimension" /><br />
        <b><em>{props.title}</em></b>
    </div>
  );

}

export default Jonour;