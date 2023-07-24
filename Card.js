import styles from "./Card.module.css";
import Button from "./Button";
import Input from "./Input";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function Card({

  handlerAddProduct
}) {

  const context = useContext(ProductContext)
  return (
    <div className={styles.container}>
      <div className={styles.name}>{context.name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={context.handlerMinus} />
        <span className={styles.count}>{context.count}</span>
        <Button label="➕" onClick={context.handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${context.price}`} each</div>
      <div className={styles.discount}>{`Discount: ${context.discount}%`}</div>
      <div className={styles.form}>
        <Input value={context.name} label="Product Name" onChange={context.handlerChangeName} />
        <Input value={context.price} label="Price" onChange={context.handlerChangePrice} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
}
export default Card;
