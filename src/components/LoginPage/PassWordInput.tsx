import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useState } from "react";
import {BiHide} from "react-icons/bi"
import HidenButton from "../Button/HidenButton";

export default function PassWordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="d-flex flex-column">
      <FormLabel>PassWord</FormLabel>
      <InputGroup size="md">
        <Input pr="4.5rem" type={ show ? "text" : "password"} />
        <InputRightElement width="4.5rem">
          {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button> */}
          <HidenButton buttonOnClick={handleClick} />

        </InputRightElement>
      </InputGroup>
    </div>
  );
}
