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

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, googleSignIn, userProfileUpdate, setLoading } =
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
            setLoading(false);
            // ...
          })
          .catch((error) => {
            // console.log(error);
          });

        //verify email
        // verifyEmail().then(() => {
        //     toast.success("Please check your email");
        // });
        toast.success("Successful Sign up");
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

  return (
    <div className="bg-stone-300 sm:w-[350px] md:w-[450px] py-5 sm:py-8 flex flex-col md:px-10 px-6 lg:px-10 mx-6 sm:mx-auto rounded-md my-10">
      <form onSubmit={handleSubmit} className="flex flex-col  justify-between ">
        <h2 className="text-xl text-primary-color md:text-2xl lg:text-3xl font-bold text-center">
          Register
        </h2>
        <label className="label">
          <span className="label-text lg:mt-4 text-primary-color font-semibold ">
            Your name
          </span>
        </label>
        <input
          className="input border-none input-bordered text-secondary-color w-full"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          required
        />
        <label className="label">
          <span className="label-text lg:mt-2 text-primary-color font-semibold ">
            Your email
          </span>
        </label>
        <input
          className="input border-none input-bordered text-secondary-color w-full"
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
          <span className="label-text lg:mt-2 text-primary-color font-semibold ">
            Password
          </span>
        </label>
        <input
          className="input border-none input-bordered text-secondary-color w-full"
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
          <span className="label-text lg:mt-2 text-primary-color font-semibold ">
            Confirm password
          </span>
        </label>
        <input
          className="input border-none input-bordered text-secondary-color w-full"
          type="password"
          placeholder="Confirm password"
          name="confirm"
          onChange={handleConfirmPasswordChange}
          required
        />
        <p className="text-red-600 text-sm font-semibold mt-1 ml-1">
          {errors.confirmPassword}
        </p>

        <button className="bg-primary-color px-8 py-2 text-white uppercase font-semibold rounded-sm  mx-auto w-40 disabled:opacity-75 mt-4">
          Sign up
        </button>
        <p className="text-center mt-3 text-secondary-color">
          Already have an account?
          <Link to="/login" className="link no-underline text-primary-color">
            Login
          </Link>
        </p>
        <p className="text-center text-secondary-color">
          ----Or, sign up with----
        </p>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="bg-primary-color p-3 rounded-full  flex items-center justify-center gap-2 mt-4"
      >
        <FaGoogle className="text-secondary-color" />
        <span className="font-semibold text-stone-200">Google</span>
      </button>
    </div>
  );
};

export default Signup;
