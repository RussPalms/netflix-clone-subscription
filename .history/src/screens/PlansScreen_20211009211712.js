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
				querySnapshot.forEach(async (productDoc) => {
					products[productDoc.id] = productDoc.data();
					const priceSnap = await productDoc.ref
						.collection("prices")
						.get();
                        priceSnap.docs.forEach(p)
				});
			});
	});

	return <div className="plansScreen"></div>;
}

export default PlansScreen;
