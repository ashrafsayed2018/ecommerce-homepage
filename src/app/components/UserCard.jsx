import React from "react";

export default function UserCard() {
  return (
    <div className="user w-full flex flex-col items-center justify-center bg-white p-4 rounded-lg mt-4 shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="block w-20 h-20 mb-2 rounded-full object-cover max-w-20"
      />
      <h3>محمد محمد</h3>
      <p>عميل</p>
    </div>
  );
}
