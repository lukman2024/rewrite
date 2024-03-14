import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = (props) => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-teal-600">
          Sign Up here..
        </Link>
      </p>
    </AuthLayout>
  );
};
export default LoginPage;
