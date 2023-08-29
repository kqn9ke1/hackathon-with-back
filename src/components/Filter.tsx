import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../contexts/ProductContext/types";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const { categories, getCategories, products, getProducts } = useContext(
    productContext
  ) as IProductContextTypes;

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = React.useState(
    searchParams.get("category") || ""
  );
  const [firstMount, setFirstMount] = React.useState(true);
  // console.log(searchParams);
  React.useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "") {
      delete currentParams.category;
      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }
    getProducts();
    // setPage(1);
  }, [category]);
  useEffect(() => {
    getCategories();
    getProducts();
    // console.log(products);
  }, []);

  // console.log(products);
  return (
    <form className="categ_form">
      Выберите Категорию
      {categories?.map((item) => (
        <div key={item.slug}>
          <input
            type="radio"
            id={item.slug}
            value={item.name}
            name="category"
            onChange={() => setCategory(`${item.slug}`)}
          />
          <label htmlFor={item.slug}>{item.slug}</label>
        </div>
      ))}
    </form>
  );
};

export default Filter;
