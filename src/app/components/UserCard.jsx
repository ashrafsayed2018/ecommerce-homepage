import { createRandomAvatar } from "@/helpers/createRandomAvatar";
import React, { useEffect, useState } from "react";

export default function UserCard({ user }) {
  const [avatar, setAvatar] = useState("");
  // create random avatar image based on user name

  useEffect(() => {
    createRandomAvatar(user, setAvatar);
  });

  return (
    <div className="user w-full flex flex-col items-center justify-center bg-white p-4 rounded-lg mt-4 shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
      <img
        src={avatar}
        alt={user.name}
        className="block w-20 h-20 mb-2 rounded-full object-cover max-w-20"
      />
      <h3 className="text-lg mb-2">{user.name}</h3>
      <p className="text-sm">{user.role}</p>
    </div>
  );
}
