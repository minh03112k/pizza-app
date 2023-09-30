import styles from "../styles/colorButton.module.css"

export default function Button (props: { buttonName: string; buttonOnClick: () => void; isRed?: boolean}) {
    const {buttonName, buttonOnClick, isRed} = props;
    
    return (
        <button className={`${!!isRed ? `${styles.colorButton}` : 'bg-secondary '}`} onClick={buttonOnClick}>{buttonName}</button>
    )
}