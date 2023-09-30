import styles from '../styles/searchBar.module.css';


export default function SearchBar () {
    return (
        <div className={`${styles.searchBar} search-bar border border-light-subtle border border-2 rounded-pill me-4 py-1 px-2`}>
            <form className={`d-flex ${styles.formImg}`} >
                <input type="text"  placeholder="Search Restaurant..." className={`${styles.formImg} border-0 bg-dark`} />
            </form>
        </div>
    )
}