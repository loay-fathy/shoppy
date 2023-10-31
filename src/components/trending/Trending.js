import "./Trending.css";
import Product from "../common/product/Product";
import { useEffect, useState, useCallback } from "react";
import Products from "../allProducts/Products";

const Trending = () => {
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
        return res.slice(0, 4);
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <>
      <h2 className="trending-title">Trending Products</h2>
      <Products className="trending-products" num={4} />

    </>
  );
};

export default Trending;
