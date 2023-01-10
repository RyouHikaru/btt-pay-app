import { useForm } from "react-hook-form";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import {
  emailValidation,
  contactNameValidation,
  contactMsgValidation,
} from "../util/validations";
import TextField from "../components/general/ValidatedTextField";
import Button from "../components/general/Button";

const Contact = () => {
  const userSession = useStoreState((state) => state.userSession);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      msg: "",
    },
  });

  const watchData = {
    name: watch("name"),
    email: watch("email"),
    msg: watch("msg"),
  };

  const submitFeedback = (data) => {
    // TODO
    console.log(data);
  };

  return (
    <section className="flex-grow flex flex-col items-center p-10 bg-gradient-to-br from-amber-200 to-amber-400 opacity-95">
      <div className="flex flex-col p-5 w-full items-center bg-amber-100 shadow-2xl rounded-md sm:p-10 md:max-w-xl">
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-semibold pb-7">Contact</h1>
          {userSession ? (
            <Link
              className="hidden pt-2 underline sm:block hover:opacity-75"
              to="/home"
            >
              Back to Home
            </Link>
          ) : null}
        </div>

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(submitFeedback)}
        >
          <TextField
            type="text"
            name="name"
            text="Name"
            register={register}
            validation={contactNameValidation}
            errors={errors}
            hasContent={watchData.name.length > 0}
          />

          <TextField
            type="text"
            name="email"
            text="Email"
            register={register}
            validation={emailValidation}
            errors={errors}
            hasContent={watchData.email.length > 0}
          />

          <TextField
            type="textarea"
            name="msg"
            text="Message"
            register={register}
            validation={contactMsgValidation}
            errors={errors}
            hasContent={watchData.msg.length > 0}
          />

          <Button text="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
