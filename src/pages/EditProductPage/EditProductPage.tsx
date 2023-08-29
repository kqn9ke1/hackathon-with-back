import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { IProductContextTypes } from "../../contexts/ProductContext/types";
import "./EditProductPage.css";
import Modal from "react-modal";

function EditProductPage() {
  const { categories, getCategories, oneProduct, getOneProduct, editProduct } =
    useContext(productContext) as IProductContextTypes;
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
    owner_email: ["admin@gmail.com"],
  });

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getOneProduct(+id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formValue.description.trim() ||
      !formValue.image ||
      !formValue.category
    ) {
      alert("fill all fields");
      return;
    }

    const data = new FormData(event.currentTarget);

    editProduct(+id, data);
    navigate(-1);
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
      <div className="form_save">
        <img
          className="back_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKix9t5JDhdv-XNJGx2i7aPn8nveIMgUcOg&usqp=CAU"
          alt="50px"
          onClick={closeModal}
        />
        <p>Редактировать</p>
        <button type="submit" className="btn_save">
          <p className="p_save">Сохранить</p>
        </button>
      </div>
      <>
        <textarea
          className="desc_inp"
          name="description"
          value={formValue.description}
          onChange={handleChange}
          placeholder="Добавьте подпись..."
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
      {/*    <button onClick={closeModal}>Закрыть</button> */}
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

export default EditProductPage;
