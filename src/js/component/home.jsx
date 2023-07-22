import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Cards from "./cards.js"
import Footer from "./footer.js"
//include images into your bundle

function Home () {
return (
<>	
<Navbar/>
<div className="container">
	<Jumbotron/>
	<div className="row d-flex justify-content-between gap-2 m.0 pt-3">
		<Cards/>
		<Cards/>
		<Cards/>
		<Cards/>
	</div>
		<Footer/>
</div>
</>
);
};


//create your first component</>

export default Home