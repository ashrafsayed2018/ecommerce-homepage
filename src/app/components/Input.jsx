import React from "react";

export default function Input({
  label,
  placeholder,
  type,
  value,
  onChange,
  labelFor,
}) {
  return (
    <div className="relative my-8">
      <label
        htmlFor={labelFor}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={labelFor}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
      />
    </div>
  );
}
