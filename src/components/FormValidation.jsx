import { useState } from "react";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
    console.log(formData)
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number" && !/^\d*$/.test(value)) {
      // If the input is not a digit, don't update the state
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "Password is invalid.";
    }
    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div className="container xl:max-w-[1032px] mx-auto px-4 pt-9">
        <form
          className="left-0 flex flex-col items-center justify-center w-full gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="name"
              className="text-xl font-medium text-black"
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-lg bg-white border-[2px] border-black rounded-lg"
            />
            {formErrors.name && (
              <p className="text-lg font-normal text-red-500">
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="number"
              className="text-xl font-medium text-black"
            >
              Number:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={`p-2 w-full rounded-lg text-lg bg-white border-[2px] border-black  ${
                formErrors.number ? "error" : ""
              }`}
              maxLength={10}
            />
            {formErrors.number && (
              <p className="text-lg font-normal text-red-500">
                {formErrors.number}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="password"
              className="text-xl font-medium text-black"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${
                formErrors.password ? "error" : ""
              } w-full p-2 rounded-lg text-lg bg-white border-[2px] border-black`}
            />
            {formErrors.password && (
              <p className="text-lg font-normal text-red-500">
                {formErrors.password}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="confirmPassword"
              className="text-xl font-medium text-black"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${
                formErrors.confirmPassword ? "error" : ""
              } w-full p-2 rounded-lg text-lg bg-white border-[2px] border-black`}
            />
            {formErrors.confirmPassword && (
              <p className="text-lg font-normal text-red-500">
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-lg text-white rounded-lg bg-Christine"
          >
            Submit
          </button>
        </form>
      </div>
      {showSuccessPopup && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-red-100 backdrop-blur-md bg-opacity-20">
          <div className="p-12 text-center rounded-lg bg-slate-800">
            <p className="text-4xl text-white">
              Form submitted <span className="block">successfully!</span>
            </p>
            <button
              onClick={handlePopupClose}
              className="px-4 py-2 text-center text-white rounded-lg bg-Christine mt-7"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default HomePage;
