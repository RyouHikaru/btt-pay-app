import { useStoreActions } from "easy-peasy";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/general/Button";
import TextField from "../components/general/ValidatedTextField";
import {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  usernameValidation,
  passwordValidation,
  matchPasswordValidation,
} from "../util/validations";

const Registration = () => {
  const registerUser = useStoreActions((action) => action.register);
  const setShowModal = useStoreActions((action) => action.setShowModal);
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      matchPassword: "",
    },
  });

  const watchData = {
    firstName: watch("firstName"),
    lastName: watch("lastName"),
    email: watch("email"),
    username: watch("username"),
    password: watch("password"),
    matchPassword: watch("matchPassword"),
  };

  const signUp = (data) => {
    registerUser(data);
    redirect("/");
  };

  const showConfirmation = (data) => {
    setShowModal({
      header: "Registration",
      body: "By confirming, you have agreed that all details are valid.",
      visible: true,
      type: "CONFIRM",
      action: {
        callback: signUp,
        args: data,
      },
    });
  };

  return (
    <section className="flex-grow flex items-center px-5 py-10 sm:justify-center md:px-24">
      <div className="flex flex-col gap-8 p-5 w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-lg">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(showConfirmation)}
        >
          <TextField
            type="text"
            name="firstName"
            text="First name"
            register={register}
            validation={firstNameValidation}
            errors={errors}
            hasContent={watchData.firstName.length > 0}
          />

          <TextField
            type="text"
            name="lastName"
            text="Last name"
            register={register}
            validation={lastNameValidation}
            errors={errors}
            hasContent={watchData.lastName.length > 0}
          />

          <TextField
            type="text"
            name="email"
            text="Email address"
            register={register}
            validation={emailValidation}
            errors={errors}
            hasContent={watchData.email.length > 0}
          />

          <TextField
            type="text"
            name="username"
            text="Username"
            register={register}
            validation={usernameValidation}
            errors={errors}
            hasContent={watchData.username.length > 0}
          />

          <TextField
            type="password"
            name="password"
            text="Password"
            register={register}
            validation={passwordValidation}
            errors={errors}
            hasContent={watchData.password.length > 0}
          />

          <TextField
            type="password"
            name="matchPassword"
            text="Confirm password"
            register={register}
            validation={matchPasswordValidation(watchData.password)}
            errors={errors}
            hasContent={watchData.matchPassword?.length > 0}
          />

          <Button text="Sign Up" />
        </form>
        <nav className="flex gap-2 mt-10 text-sm">
          <span className="italic">Already have an account?</span>
          <span className="hover:opacity-75 underline">
            <Link to="/">Sign In</Link>
          </span>
        </nav>
      </div>
    </section>
  );
};

export default Registration;
