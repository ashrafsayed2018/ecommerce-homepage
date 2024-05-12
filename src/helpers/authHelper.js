// check if user role is admin
export const isAdmin = (user) => {
  if (user.role === "admin") {
    return true;
  }
  return false;
};
