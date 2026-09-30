"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const page = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  async function showDetails(params: number) {
    router.push(`/products/${params}`);
  }

  return (
    <div>
      <h1>This is product page</h1>
      {products ? (
        products.map((product) => (
          <div
            onClick={() => showDetails(product.id)}
            key={product.id}
            className="text-center border border-purple-600 w-[250px] h-[450px] text-purple-500 mb-20 mx-auto"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="h-[30%]"
            />
            <h1>Title: {product.title}</h1>
            <h1>Description: {product.description}</h1>
            <h1>Category: {product.category}</h1>
            <h1>Price: {product.price}</h1>
            <h1>
              Rating: {product.rating.count}/{product.rating.rate}
            </h1>
          </div>
        ))
      ) : (
        <div>
          <h1>No products yet</h1>
        </div>
      )}
    </div>
  );
};

export default page;
