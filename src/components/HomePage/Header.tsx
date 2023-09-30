import OffCanvas from "./MenuHeader";
import LoginHeader from "./LoginHeader";
import SearchBar from "./SearchBar";

export default function Header () {
    return (
        <div className="container d-flex justify-content-between align-items-center p-0" >
            <h1 className="text-white">NameBrand</h1>
            <SearchBar />
            <div className="d-flex justify-content-between align-items-center">
                <LoginHeader />
                <OffCanvas /> 
            </div>
        </div>
    )
}