import React, { FC, ReactNode, createContext, useReducer } from "react";
import {
  IProductContextActions,
  IProductContextTypes,
  IProductCreate,
  initStateProducts,
} from "./types";
import $axios from "../../utils/axios";
import { API } from "../../utils/consts";

export const productContext = createContext<IProductContextTypes | null>(null);

const initState: initStateProducts = {
  products: [],
  oneProduct: null,
  categories: [],
};

function reducer(state: initStateProducts, action: IProductContextActions) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "oneProduct":
      return { ...state, oneProduct: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

interface ProductContextProps {
  children: ReactNode;
}
const ProductContext: FC<ProductContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    try {
      const { data } = await $axios.get(
        `${API}/products/${window.location.search}`
      );
      // console.log(data);
      dispatch({
        type: "products",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneProduct(id: number) {
    try {
      const { data } = await $axios.get(`${API}/products/${id}/`);

      dispatch({
        type: "oneProduct",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addProduct(newProduct: any) {
    try {
      await $axios.post(`${API}/products/`, newProduct);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteProduct(id: number) {
    try {
      await $axios.delete(`${API}/products/${id}/`);

      getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  async function editProduct(id: number, newData: any) {
    try {
      await $axios.patch(`${API}/products/${id}/`, newData);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  async function getCategories() {
    try {
      const { data } = await $axios.get(`${API}/categories/`);
      // console.log(data);
      dispatch({
        type: "categories",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    categories: state.categories,
    getProducts,
    getCategories,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
