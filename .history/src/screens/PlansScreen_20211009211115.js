import "PlansScreen.css";
import { useEffect } from "react";
import db from "../firebase";

function PlansScreen() {
	const [products, setProducts] = useState([]);

    useEffect(() => {db.collection('products').})

	return <div className="plansScreen">

    </div>;
}

export default PlansScreen;
