import "PlansScreen.css";
import { useEffect, useState } from "react";
import db from "../firebase";

function PlansScreen() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		db.collection("products")
			.where("active", "==", true)
			.get.then((querySnapshot) => {
				const products = {};
                que
			});
	});

	return <div className="plansScreen"></div>;
}

export default PlansScreen;
