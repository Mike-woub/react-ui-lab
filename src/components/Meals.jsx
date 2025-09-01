import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
const Meals = () => {

    const [items, setItems]=useState([]);
   useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood").then(res=>{
        // console.log(res.data.meals);
        setItems(res.data.meals);

    }).catch((err)=>{
      console.log(err);
    });
   },[]);

   const itemsList=()=>{
   if (items.length>0){ return items.map(({strMeal,strMealThumb, idMeal})=>{
       return( <section key={idMeal} className='meals-card'>
        <img src={strMealThumb} alt={strMeal}  className='meals-img'/> 
        <section className='meals-content'>
          <p className='meals-p'>{strMeal}</p>
          <p className='meals-p'>#{idMeal}</p>
        </section>
     </section>)
    })}
    else{
      return <p className='meals-p'>Loading...</p>
    }
   }
  return (
    <div>
      <h1 className='meals-h1'>Meals Fetched Using Axios</h1>
       <div className='meals-items-container'>
      
      {itemsList()}
    </div>
    </div>
   
  )
}

export default Meals