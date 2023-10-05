import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-dark position-absolute bottom-0 w-100 p-0">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="text-white my-3">
          <div className="d-block mb-4">
            <p className="fs-5">NameBrand</p>
          </div>
          <div className="d-block mb-4">
            <p className="fs-5 mb-0">Address</p>
            <p style={{ fontSize: "13px" }}>
              xxx/xxx Vuon Lai, Tan Phu District, Ho Chi Minh City
            </p>
          </div>
          <div className="d-block">
            <p className="fs 5 mb-0">Call our hotline for support</p>
            <p style={{ fontSize: "13px" }}>028xxxxxxx</p>
          </div>
        </div>
        <div className="container d-flex flex-column align-items-center w-50">
          <h3 className="text-white">Follow us on social media</h3>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn">
              <BsFacebook style={{ fontSize: "30px", color: "#fff" }} />
            </button>
            <button className="btn">
              <BsInstagram style={{ fontSize: "30px", color: "#fff" }} />
            </button>
            <button className="btn">
              <BsLinkedin style={{ fontSize: "30px", color: "#fff" }} />
            </button>
          </div>
        </div>
        <div className="text-white">
          <p className="fs-5 mb-4 ">Terms & Condition</p>
          <a href="#"><p style={{ fontSize: "13px", textDecoration: "underline" }}>General Terms & Conditions</p></a>
          <a href="#"><p style={{ fontSize: "13px", textDecoration: "underline" }}>Payment Policy</p></a>
          <a href="#"><p style={{ fontSize: "13px", textDecoration: "underline" }}>Data Privacy Policy</p></a>
          <a href="#"><p style={{ fontSize: "13px", textDecoration: "underline" }}>E-voucher Term & Condition</p></a>


        </div>
      </div>
    </div>
  );
}
