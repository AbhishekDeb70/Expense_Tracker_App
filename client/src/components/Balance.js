import axios from "axios";
import React, { useContext , useEffect , useState} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  //const amounts = transactions.map((transaction) => transaction.amount);
  //const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //let allval ;
  const [totaltrans, setalltotaltrans] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res) 
        const amounts = res.data.map((transaction) => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        //allval= res.data.reduce((acc, item) => console.log(acc,item));
        console.log(total);
        setalltotaltrans(total);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{totaltrans}</h1>
    </div>
  );
};
