import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [arr, setArr] = useState([1, 2]);
	const incrementState = () => {
		if(arr.length < 100)
		setArr([...arr, arr.at(-1) + 1]);
	};

	const returnNumber = (num) => {
		if (num % 6 === 0 && arr.length === 100) {
			return <div className="number orange">{num}</div>;
		} else if (num % 3 === 0 && arr.length === 100) {
			return <div className="number green">{num}</div>;
		} else if (num % 2 === 0 && arr.length === 100){
			return <div className="number blue">{num}</div>;
		} else {
			return <div className="number">{num}</div>;
		}
	}

	useEffect(() => {
		setTimeout(incrementState, 1000);
	}, [arr]);

	const colouredVals = (
		<div className="display-num">
			{arr.map((num) => {
				console.log(arr)
				return returnNumber(num)
			})}
		</div>
	);

	return <>{colouredVals}</>;
}

export default App;
