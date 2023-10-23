import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";
import RegisterForm from "../components/RegistrationPage/RegistrationForm";

export default function Register () {
    return (
        <div className="bg-secondary-subtle min-vh-100 d-flex flex-column">
            <Header />
            <div className="min-vh-100 p-4">
                <RegisterForm />
            </div>
            <Footer />
        </div>
    )
}