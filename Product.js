import { useState, useContext } from 'react';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';
import ProductContext from '../context/ProductContext';

function Product() {
  const context = useContext(ProductContext)

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);


  const handlerAddProduct = () => {
   
    
    // Create new list item
    const newItem = {
      name: context.name,
      quantity: context.count,
      price: context.price,
      discount: context.discount,
      total: context.count * context.price * (100-context.discount)/100,
   } 
   
   // Copy previous list and append new item to its end
   const newList = [...list, newItem];
   console.log('  newList:', newList);
   setList(newList);

   // Add the item total to the running listTotal
   const sum = sumTotal + newItem.total;
   console.log('  sumTotal:', sumTotal);
   setSumTotal(sum);
  }

  return (
    <div className={styles.container}>
      <Card
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
