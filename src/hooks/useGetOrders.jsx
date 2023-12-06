import { useState } from "react";
import axios from "axios";
import { Url } from "../additionals/vars";

export const useGetOrders = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const [orders, setOrders] = useState([]);

   const getOrders = async () => {
      console.log("Started");
      try {
         const orders = await axios.get(`${Url}/orders`);
         setOrders(orders.data.orders);
      }
      catch(err) {
         console.log(err);
         setError("Neuspesno uzimanje porudzbina");
      }

      console.log("finished");
      console.log(orders);
   }

   return { error, loading, orders, getOrders }
}