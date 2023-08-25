import React, { useEffect, useState, useContext } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";

function AddProductPage() {
  const { categories, getCategories, addProduct } = useContext(
    productContext
  ) as IProductContextTypes;

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    if (e.target.name === "image") {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      setFormValue({
        ...formValue,
        [target.name]: file,
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.image ||
      !formValue.category.trim()
    ) {
      alert("fill all fields");
      return;
    }

    const data = new FormData(event.currentTarget);

    addProduct(data);

    setFormValue({
      title: "",
      description: "",
      price: "",
      image: "",
      category: "",
      stock: "",
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formValue.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formValue.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={formValue.title}
          onChange={handleChange}
        />
        <form action="">
          <select
            name="category"
            id="demo-simple-select"
            value={formValue.category}
            onChange={handleChange}
          >
            {categories?.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </form>
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit"> Add</button>
      </form>
    </>
  );
}

export default AddProductPage;
