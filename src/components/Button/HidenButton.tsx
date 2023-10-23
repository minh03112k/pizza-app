import { Button, VisuallyHidden } from "@chakra-ui/react";
import { BiHide } from "react-icons/bi";

export default function HidenButton(props: { buttonOnClick: () => void, show?: boolean }) {
    const {buttonOnClick, show} = props;
  return (
    <Button className={`btn border-0 p-0 bg-transparent ${show ? 'text' : 'password' }`} onClick={buttonOnClick}>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <BiHide style={{ fontSize: "20px" }} />
    </Button>
  );
}
