import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBtn,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import CommentInput from "../../components/CommentInput";
import setting from "../../assets/settings.svg";
import flag from "../../assets/bookmark.svg";
import reels from "../../assets/reels.svg";
import "./ProfilePage.css";
import ProuctPage from "../ProductPage/ProuctPage";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { useProductContext } from "../../contexts/ProductContext/ProductContext";

export default function ProfilePage() {
  const { user } = useAuthContext();
  const { products } = useProductContext();
  return (
    <div
      className="profile_header"
      style={{ width: "70%", margin: "50px auto" }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div className="header_avatar">
          <div className="header_avatar_img">
            <img
              style={{
                width: "150px",
                aspectRatio: 1 / 1,
                objectFit: "cover",
                borderRadius: "100%",
              }}
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="avatar"
            />
          </div>
        </div>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "100px",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "black" }}>{user?.email}nickname</span>
            <div>
              <img src={setting} alt="" width="30" height="30" />
            </div>
          </div>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              width: "250px",
            }}
          >
            <li>
              <span>9 </span>Posts
            </li>
            <li>
              <span>119 </span>Follower
            </li>
            <li>
              <span>119 </span>Following
            </li>
          </ul>
        </section>
      </header>
      <div className="profile_posts_sectors">
        <div className="post_icon_box">
          <span>Post</span>
        </div>
        <div>
          <img src={reels} alt="" />
          <span>Reels</span>
        </div>
        <div>
          <img src={flag} alt="" />
          <span>Elect</span>
        </div>
      </div>
      <ProuctPage />
    </div>
    // <div
    //   className="gradient-custom-2"
    //   style={{
    //     background:
    //       "linear-gradient(45deg,rgba(45, 147, 253, 1) 3%,rgba(195, 34, 183, 1) 92%)",
    //   }}
    // >
    //   <MDBContainer className="py-5 h-100">
    //     <MDBRow className="justify-content-center align-items-center h-100">
    //       <MDBCol xs="12" sm="10" md="8" lg="7" xl="7">
    //         <MDBCard>
    //           <div
    //             className="rounded-top text-white d-flex flex-row"
    //             style={{
    //               background: "black",
    //               height: "200px",
    //             }}
    //           >
    //             <div
    //               className="ms-4 mt-5 d-flex flex-column"
    //               style={{ width: "150px" }}
    //             >
    //               <MDBCardImage
    //                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
    //                 alt="Generic placeholder image"
    //                 className="mt-4 mb-2 img-thumbnail"
    //                 fluid
    //                 style={{ width: "150px", zIndex: "1" }}
    //               />
    //               <MDBBtn
    //                 outline
    //                 color="dark"
    //                 style={{ height: "36px", overflow: "visible" }}
    //               >
    //                 Edit profile
    //               </MDBBtn>
    //             </div>
    //             <div className="ms-3" style={{ marginTop: "130px" }}>
    //               <MDBTypography tag="h5">Justin Biber</MDBTypography>
    //               <MDBCardText>L.A</MDBCardText>
    //             </div>
    //           </div>
    //           <div
    //             className="p-4 text-black"
    //             style={{ backgroundColor: "#f8f9fa" }}
    //           >
    //             <div className="d-flex justify-content-end text-center py-1"></div>
    //           </div>
    //           <MDBCardBody className="text-black p-4">
    //             <div className="mb-5">
    //               <p className="lead fw-normal mb-1">About</p>
    //               <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
    //                 <MDBCardText className="font-italic mb-1">
    //                   Singer
    //                 </MDBCardText>
    //                 <MDBCardText className="font-italic mb-1">
    //                   Lives in LA
    //                 </MDBCardText>
    //               </div>
    //             </div>
    //             <div className="d-flex justify-content-between align-items-center mb-4">
    //               <MDBCardText className="lead fw-normal mb-0">
    //                 Recent photos
    //               </MDBCardText>
    //               <MDBCardText className="mb-0">
    //                 <a href="#!" className="text-muted">
    //                   Show all
    //                 </a>
    //               </MDBCardText>
    //             </div>
    //             <MDBRow>
    //               <MDBCol className="mb-2">
    //                 <MDBCardImage
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
    //                   alt="image 1"
    //                   className="w-100 rounded-3"
    //                 />
    //               </MDBCol>
    //               <MDBCol className="mb-2">
    //                 <MDBCardImage
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
    //                   alt="image 1"
    //                   className="w-100 rounded-3"
    //                 />
    //               </MDBCol>
    //             </MDBRow>
    //             <MDBRow className="g-2">
    //               <MDBCol className="mb-2">
    //                 <MDBCardImage
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
    //                   alt="image 1"
    //                   className="w-100 rounded-3"
    //                 />
    //               </MDBCol>
    //               <MDBCol className="mb-2">
    //                 <MDBCardImage
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
    //                   alt="image 1"
    //                   className="w-100 rounded-3"
    //                 />
    //               </MDBCol>
    //             </MDBRow>
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <CommentInput />
    // </div>
  );
}
