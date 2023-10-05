import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";

export default function Home () {
    return (
        <div>
            <div className="bg-white bg-opacity-70 min-vh-100">
                <Header />
                <Footer />
            </div>
        </div>
    )
}