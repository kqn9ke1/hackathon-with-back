import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import LiveSearch from "../../components/common/LiveSearch/LiveSearch";
import CommentInput from "../../components/CommentInput";

export default function ProfilePage() {
  return (
    <div
      className="gradient-custom-2"
      style={{
        background:
          "linear-gradient(45deg,rgba(45, 147, 253, 1) 3%,rgba(195, 34, 183, 1) 92%)",
      }}
    >
      <LiveSearch />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xs="12" sm="10" md="8" lg="7" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{
                  background: "black",
                  height: "200px",
                }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">Justin Biber</MDBTypography>
                  <MDBCardText>L.A</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1"></div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Singer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in LA
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent photos
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <CommentInput />
    </div>
  );
}
