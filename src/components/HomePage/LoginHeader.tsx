import { useState } from "react";
import CustomButton from "../Button/CustomButton";
import { CiUser } from "react-icons/ci";
import styles from "../styles/rightHeader.module.css"
import { Button } from "@chakra-ui/react";

export default function LoginHeader () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <div >
            {isLoggedIn ? (
                <div className="dropdown">
                    <Button pl={0} className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" variant='ghost' colorScheme='blackAlpha'><CiUser className="text-light" style={{fontSize: '30px'}}/></Button>
                    <ul className="dropdown-menu bg-secondary-subtle">
                        <li className="p-2"><p className="text-body-emphasis fw-semibold m-0">We welcom you to Pizza...</p></li>
                        <div className="text-center" style={{padding: "2px"}}>
                            <CustomButton buttonName="LOGOUT" onClickButton={handleLogout} isLogout />
                        </div>
                        <div className={`${styles.menuDropDown}`}>
                            <li><button className="btn text-body-emphasis fw-semibold border-0 text-start">Personal Infomation</button></li>
                            <li><button className="btn text-body-emphasis fw-semibold border-0">Order History</button></li>
                            <li><button className="btn text-body-emphasis fw-semibold border-0">Points</button></li>
                        </div>

                    </ul>
                </div>
            ) : (
                <div>
                    <CustomButton buttonName="LOGIN" onClickButton={handleLogin}/>
                </div>
            )
        }
        </div>
    )

}