import "./Products.css";
import Product from "../common/product/Product";
import { useEffect, useState, useCallback } from "react";

const Products = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
      if (!response.ok) {
        throw new Error("Somthing Went Wrong");
      }
      setData(await response.json());
      setData((res) => {
        return res.slice(0, props.num);
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [props.num]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <div className={props.className}>
      {data &&
        data.map((product) => {
          let sale = true;
          if (product.price - product.discountedPrice === 0) {
            sale = false;
          }
          return (
            <Product
              id={product.id}
              key={product.id}
              image={product.imageUrl}
              title={product.title}
              price={product.discountedPrice}
              sale={sale}
            />
          );
        })}
    </div>
  );
};

export default Products;
