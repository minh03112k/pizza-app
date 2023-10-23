import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { FaGoogle, FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      <div className="bg-secondary w-50 p-4 m-3 border border-1 rounded">
        <div className="d-flex flex-column justify-content-between gap-3 ">
          <h3 className="text-center">Creat new account</h3>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <button className="btn p-0">
              <FaGoogle style={{ fontSize: "20px" }} />
            </button>
            <button className="btn p-0">
              <FaFacebook style={{ fontSize: "20px" }} />
            </button>
            <button className="btn p-0">
              <FaMobileAlt style={{ fontSize: "20px" }} />
            </button>
          </div>
          <span className="text-center fw-bold">
            Or your use email for registration:
          </span>
          <div className="d-flex flex-column gap-2">
            <Input
              variant="outline"
              placeholder="Name"
              className="text-white border-dark"
            />
            <Input
              variant="outline"
              placeholder="Email"
              className="text-white border-dark"
            />
            <InputGroup className="border-dark">
              <InputLeftAddon children="+84" className="border-dark" />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}
