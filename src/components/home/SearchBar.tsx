export default function SearchBar () {
    return (
        <div className="search-bar border border-black border border-2 rounded-pill me-4 py-1 px-2">
            <form className="d-flex" >
                <input type="text"  placeholder="Search Store..." className="form-input" />
            </form>
        </div>
    )
}