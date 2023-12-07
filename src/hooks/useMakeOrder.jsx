import axios from "axios";
import { useState } from "react"
import { Url } from "../additionals/vars";

export const useMakeOrder = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const makeOrder = async (name, surname, city, adress, phone, orders, summedPrice, shipping) => {
      try {
         await axios.post(`${Url}/orders`, {
            name,
            surname,
            city,
            adress,
            phone,
            orders,
            summedPrice,
            shipping
         })
      }
      catch(err) {
         setError("Porudzbina nije prosla");
         console.log(err);
      }
   }

   return {error, loading, makeOrder};
}