import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DetailsPage from "./DetailsPage/DetailsPage";
const H = () => {
  const [modal, setmodal] = useState(false);

  const openModal = () => {
    setmodal(true);
  };

  const closeModal = () => {
    setmodal(false);
  };
  return (
    <div>
      <Navbar />

      <button onClick={openModal}>Post</button>
      {modal && <DetailsPage />}
    </div>
  );
};

export default H;
