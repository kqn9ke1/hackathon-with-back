import React, { useState, useEffect, useContext } from "react";
import "./ProductPage.css";
import { useSearchParams } from "react-router-dom";
import { API } from "../../utils/consts";
import $axios from "../../utils/axios";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";

// const ProuctPage = () => {
// const products = [
//   {
//     id: 1,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 2,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 3,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 4,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 5,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 6,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 7,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 8,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 9,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
//   {
//     id: 10,
//     img: "https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg",
//   },
// ];
// const [categ, setCateg] = useState();
// async function getCategories() {
//   try {
//     const { data } = await $axios.get(`${API}/categories/`);
//     setCateg(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// useEffect(() => {
//   getCategories();
// }, []);
// console.log(categ);

const ProuctPage = () => {
  const { getProducts, products } = useContext(
    productContext
  ) as IProductContextTypes;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div className="container">
      {products?.map((item) => (
        <img src={item.image} alt="" className="image" />
      ))}
    </div>
  );
};

export default ProuctPage;
