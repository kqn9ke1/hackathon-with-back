import React, { useEffect, useState, useContext } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";
import Modal from "react-modal";
import "./AddProductPage.css";

function AddProductPage() {
  const { categories, getCategories, addProduct } = useContext(
    productContext
  ) as IProductContextTypes;

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "0",
    image: "",
    category: "",
    stock: "in_stock",
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
    console.log(categories[0].name);
    setFormValue({
      title: "",
      description: "",
      price: "0",
      image: "",
      category: "",
      stock: "in_stock",
    });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <form action="" onSubmit={handleSubmit} className="add_form">
      <input
        type="text"
        name="title"
        className="img_input"
        value={formValue.title}
        onChange={handleChange}
      />
      <input
        type="text"
        className="desc_input"
        name="description"
        value={formValue.description}
        onChange={handleChange}
      />

      <form>
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
      <button onClick={closeModal}>Закрыть</button>
    </form>
  );
  return (
    <>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal_form"
      >
        {modalContent}
      </Modal>
    </>
  );
}

export default AddProductPage;
