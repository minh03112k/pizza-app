import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { CiBoxList } from "react-icons/ci";
import styles from "../styles/rightHeader.module.css"

export default function Menu() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <CiBoxList style={{ color: "#fff", fontSize: "30px" }} />
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column ">
          <ul className="list-unstyled d-flex flex-column mb-0">
            <li className="fs-3 p-4">
              <button onClick={onToggle}>Menu</button>
              <Collapse in={isOpen} className={`${styles.boxShadow} rounded`}>
                <Box
                  className="p-4 text-white bg-dark rounded mt-1"
                >
                  <ul className={`list-unstyled ${styles.menuProduct}`}>
                    <li className="fs-5 p-1">Product 1</li>
                    <li className="fs-5 p-1 ">Product 1</li>
                    <li className="fs-5 p-1 ">Product 1</li>
                    <li className="fs-5 p-1">Product 1</li>
                  </ul>
                </Box>
              </Collapse>
            </li>
            <li className="fs-3 p-4">Library</li>
            <li className="fs-3 p-4">About Us</li>
            <li className="fs-3 p-4">Career</li>
          </ul>
        </div>
      </div>
    </>
  );
}
