//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
export function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="fourthDig">{props.digitFour % 10}</div>
			<div className="thirdDig">{props.digitThree % 10}</div>
			<div className="secondDig">{props.digitTwo % 10}</div>
			<div className="firstDig">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//render your react application
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#root")
	);
}, 1000);
