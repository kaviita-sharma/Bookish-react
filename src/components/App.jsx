import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Review from "./Review";
import Sell from "./Sell";
import Jonour from "./Jonour";
import Facilities from "./Facilities";


function App(){
    return(

        <div>
            <Header />
            <Homepage />
            <Jonour />
            <Sell />
            <Facilities />
            <Review />
            <Footer />
        </div>
    );
}

export default App;