import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";
import LoginForm from "../components/LoginPage/LoginForm";

export default function Login () {
    return (
        <div className="bg-secondary-subtle min-vh-100 d-flex flex-column">
            <Header />
            <div>
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
}