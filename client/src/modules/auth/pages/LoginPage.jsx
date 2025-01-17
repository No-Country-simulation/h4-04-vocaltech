import { FormLayout } from "../components/FormLayout";
import { LoginForm } from "../components/Loginform";

export const LoginPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <LoginForm />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <FormLayout />
      </div>
    </div>
  );
};
