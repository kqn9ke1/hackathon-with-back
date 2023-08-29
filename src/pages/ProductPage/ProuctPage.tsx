import React, { useState, useEffect, useContext } from "react";
import "./ProductPage.css";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";
import "./ProductPage.css";

const ProuctPage = () => {
  const navigate = useNavigate();
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
        <>
          <img src={item.image} alt="" className="image" key={item.id} />
          <button key={item.id} onClick={(e) => navigate(`edit/${item.id}/`)}>
            edit
          </button>
        </>
      ))}
    </div>
  );
};

export default ProuctPage;
