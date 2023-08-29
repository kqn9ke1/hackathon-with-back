import React, { useEffect, useState, useContext } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";
import Modal from "react-modal";
import "./AddProductPage.css";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const navigate = useNavigate();
  const { categories, getCategories, addProduct } = useContext(
    productContext
  ) as IProductContextTypes;
  const [file, setFile] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "a",
    description: "",
    price: "0",
    image: "",
    category: "",
    stock: "in_stock",
    owner_email: ["admin@gmail.com"],
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
      !formValue.description.trim() ||
      !formValue.category.trim() ||
      !formValue.title
    ) {
      alert("fill all fields");
      return;
    }

    const data = new FormData(event.currentTarget);

    addProduct(data);
    setFormValue({
      title: "a",
      price: "0",
      description: "",
      stock: "in_stock",
      image: "",
      category: "",
      owner_email: ["admin@gmail.com"],
    });
    navigate("/posts");
  };

  const modalContent = (
    <form action="" onSubmit={handleSubmit} className="add_form">
      <div className="form_save">
        {file ? (
          <img
            className="back_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKix9t5JDhdv-XNJGx2i7aPn8nveIMgUcOg&usqp=CAU"
            alt="50px"
            onClick={() => setFile(false)}
          />
        ) : null}
        <p>Создание публикации</p>
        {file ? (
          <button type="submit" className="btn_save">
            <p className="p_save">Поделиться</p>
          </button>
        ) : null}
      </div>
      {!file ? (
        <>
          <img
            src="https://cdn.icon-icons.com/icons2/1320/PNG/512/-gallery_86860.png"
            alt=""
            width={"150px"}
            className="img_inp"
          />
          <input
            type="file"
            className="file_inp"
            name="image"
            onChange={(e) => {
              setFile(true);
              handleChange(e);
            }}
          />
        </>
      ) : (
        <>
          <textarea
            className="desc_inp"
            name="description"
            value={formValue.description}
            onChange={handleChange}
            placeholder="Добавьте подпись..."
            // label="Description"
          ></textarea>
          <form className="categ_form">
            Выберите Категорию
            <select
              name="category"
              id="demo-simple-select"
              value={formValue.category}
              onChange={handleChange}
              className="categ_select"
            >
              {categories?.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </>
      )}
      {/*    <button onClick={closeModal}>Закрыть</button> */}
    </form>
  );
  return (
    <>
      <button
        onClick={() =>
          addProduct({
            title: "aaa",
            price: "0",
            description: "gssdv",
            stock: "in_stock",
            image: "rgvsvgr",
            category: "cats",
            owner_email: ["@admin@gmail.com"],
          })
        }
      >
        Savee
      </button>
      <form action="" onSubmit={handleSubmit} className="add_form">
        <input type="file" name="image" onChange={handleChange} />
        <input type="text" name="stock" onChange={handleChange} />
        <input type="text" name="title" onChange={handleChange} />
        <input type="text" name="price" onChange={handleChange} />
        <input type="text" name="category" onChange={handleChange} />

        <textarea
          name="description"
          value={formValue.description}
          onChange={handleChange}
          placeholder="Добавьте подпись..."
          // label="Description"
        ></textarea>
        <button type="submit">save</button>
      </form>
      {/* <button onClick={openModal}>Открыть модальное окно</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          closeModal();
          setFile(false);
        }}
        className="modal_form"
      >
        {modalContent}
      </Modal> */}
    </>
  );
}

export default AddProductPage;
