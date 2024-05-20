import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function InputComponent({
  label,
  placeholder,
  type,
  value,
  onChange,
  labelFor,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative py-4">
      {type === "password" && (
        <div className="absolute top-1/2 translate-y-1/8 -translate-x-1/2 left-3 cursor-pointer">
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="w-4 h-4"
            onClick={togglePasswordVisibility}
          />
        </div>
      )}
      <label
        htmlFor={labelFor}
        className="relative block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={labelFor}
        type={showPassword ? "text" : type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
      />
    </div>
  );
}
