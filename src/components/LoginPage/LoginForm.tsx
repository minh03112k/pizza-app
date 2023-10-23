import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PassWordInput from "./PassWordInput";
import styles from "../styles/loginForm.module.css"
import {FcGoogle} from "react-icons/fc"

export default function LoginForm () {
  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      <div className="bg-secondary w-50 p-4 m-3 border border-1 rounded">
        <div className="d-flex flex-column justify-content-between gap-3 ">
          <h3 className="d-flex justify-content-center">
            Login to your account
          </h3>
          <div className="d-flex flex-column gap-3">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <PassWordInput />
          </div>
          <div className="d-flex justify-content-center">
            <Button colorScheme="gray" variant="solid" className="w-50 rounded-pill p-4">
              Login
            </Button>
          </div>
          <div className={`${styles.separator}`}>
            <div className={`${styles.textSeparator } px-2`}>OR</div>
          </div>
          <div className="d-flex flex-column gap-3">
            <Button colorScheme="gray" variant="solid" className="w-100 rounded-pill p-4">
                Sign in with phone number
            </Button>
            <Button colorScheme="gray" variant="solid" className="w-100 rounded-pill p-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <FcGoogle style={{fontSize: '30px'}} />
                <span>Sign in with Google </span>
              </div>
            </Button>
          </div>
          <div className="d-flex justify-content-center  gap-2">
            <span>Did not have an account?</span>
            <span className="text-decoration-underline fw-bold"><a href="#">Create an account</a></span>
          </div>
          {/* k dung dc bootstrap */}
          <a className="text-center mb-0 fw-bold text-decoration-underline" href="#">Forgot password</a>
          {/* k dung dc bootstrap */}
        </div>
      </div>
    </div>
  );
}
