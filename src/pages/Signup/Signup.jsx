import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, googleSignIn, userProfileUpdate } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        form.reset();

        //update user info
        userProfileUpdate(userInfo.name)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error);
          });

        //verify email
        // verifyEmail().then(() => {
        //     toast.success("Please check your email");
        // });
        toast.success("Successful Signup");
        navigate(from, { replace: true });

        // navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Successful Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //   const handleNameChange = (e) => {
  //     const name = e.target.value;
  //     console.log(name);
  //     setUserInfo({ ...userInfo, name: name });
  //   };
  // console.log(userInfo.name);
  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must has at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one upper case",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setErrors({
        ...errors,
        password: "At least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;

    if (userInfo.password !== confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Please enter the password again",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: confirmPassword });
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="bg-slate-200 sm:w-[350px] md:w-[400px] h-[700px] flex flex-col px-6 lg:px-10  mx-auto rounded-md my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-between py-4"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
          Register
        </h2>
        <label className="label">
          <span className="label-text lg:mt-4 text-gray-600 font-semibold ">
            Your name
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          required
        />
        <label className="label">
          <span className="label-text lg:mt-2 text-gray-600 font-semibold ">
            Your email
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none  focus:outline-primary focus:outline-offset-2 input-bordered w-full "
          type="text"
          placeholder="E-mail address"
          name="emali"
          onChange={handleEmailChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.email}
        </p>
        <label className="label">
          <span className="label-text lg:mt-2 text-gray-600 font-semibold ">
            Password
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full "
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.password}
        </p>
        <label className="label">
          <span className="label-text lg:mt-2 text-gray-600 font-semibold ">
            Confirm password
          </span>
        </label>
        <input
          className="input focus:outline-2 border-none focus:outline-primary focus:outline-offset-2 input-bordered w-full "
          type="password"
          placeholder="Confirm password"
          name="confirm"
          onChange={handleConfirmPasswordChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.confirmPassword}
        </p>

        <div className="form-control">
          <label className="cursor-pointer flex gap-4 items-center">
            <input
              onClick={handleChecked}
              type="checkbox"
              className="checkbox checkbox-sm rounded-full"
            />
            <p className="label-text text-gray-400 font-semibold mt-2">
              I agree to the
              <span className="link no-underline text-primary-color">
                Terms & Conditions
              </span>
            </p>
          </label>
        </div>
        {}
        <button
          className="bg-primary-color px-8 py-2 text-white uppercase font-semibold rounded-sm  mx-auto w-40 disabled:opacity-75 mt-2"
          disabled={!checked}
        >
          Sign up
        </button>
        <p className="text-center mt-3">
          Already have an account?
          <Link to="/login" className="link no-underline text-primary-color">
            {""} Login
          </Link>
        </p>
        <p className="text-center">----Or, sign up with----</p>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="bg-white p-3 rounded-full mt-4 flex items-center justify-center gap-2"
      >
        <FaGoogle className="text-primary-color" />
        <span>Google</span>
      </button>
    </div>
  );
};

export default Signup;
