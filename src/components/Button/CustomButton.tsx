import stylesButton from "../styles/colorButton.module.css"

import { Button } from "@chakra-ui/react";

// export default function Button (props: { buttonName: string; buttonOnClick: () => void; isRed?: boolean}) {
//     const {buttonName, buttonOnClick, isRed} = props;
    
//     return (
//         <button className={`${!!isRed ? `${styles.colorButton}` : 'bg-secondary '}`} onClick={buttonOnClick}>{buttonName}</button>
//     )
// }

export default function CustomButton (props : {buttonName : string, onClickButton: () => void, isLogout?: boolean}) {
    const {buttonName, onClickButton, isLogout} = props;
    console.log('isLogout', isLogout)

    return (
        <Button onClick={onClickButton} className={`${!!isLogout ? `${stylesButton.colorButton}` : 'bg-secondary' }`} variant='solid' size='md'>
        {buttonName}
      </Button>
    )

}