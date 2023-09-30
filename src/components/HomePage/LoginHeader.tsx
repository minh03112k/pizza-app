import { useState } from "react";
import Button from "../Button/Button";
import myImage from "../../Image/person.png"
import { CiUser } from "react-icons/ci";
import styles from "../styles/loginHeader.module.css"

export default function LoginHeader () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <div className={`${styles.loginHeader}`}>
            {isLoggedIn ? (
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><CiUser style={{color: "#fff", fontSize: '30px'}}/></button>
                    <ul className="dropdown-menu bg-secondary-subtle">
                        <li className="p-2"><p className="text-body-emphasis fw-semibold m-0">We welcom you to Pizza...</p></li>
                        <div className="text-center" style={{padding: "2px"}}>
                            <Button buttonName="LOGOUT" buttonOnClick={handleLogout} isRed />
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
                    <Button buttonName="LOGIN" buttonOnClick={handleLogin}/>
                </div>
            )
        }
        </div>
    )

}