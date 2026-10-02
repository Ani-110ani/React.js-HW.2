"use client";

import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>იტვირთება</div>;
  }

  if (error) {
    return <div>მოხდა შეცდომა</div>;
  }

  return (
    <main>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </main>
  );
}
