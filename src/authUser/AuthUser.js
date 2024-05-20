// import jwt from "jsonwebtoken";
// export const dynamic = "force-dynamic";

// export const AuthUser = async (req) => {
//   const token = req.headers.get("Authorization")?.split(" ")[1];
//   console.log(token === undefined, "token stripe api auth");
//   console.log(
//     jwt.verify(token, "default_secret_key"),
//     "extratAuthUserInfoextratAuthUserInfo stripe api auth"
//   );
//   if (token === undefined) return null;
//   try {
//     const extratAuthUserInfo = jwt.verify(token, "default_secret_key");
//     if (extratAuthUserInfo) return extratAuthUserInfo;
//   } catch (error) {
//     return null;
//   }
// };

import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

export const AuthUser = async (req) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (token === undefined) {
    console.log("Token is undefined. Returning null.");
    return null;
  }

  try {
    const extratAuthUserInfo = jwt.verify(token, "default_secret_key");
    if (extratAuthUserInfo) {
      return extratAuthUserInfo;
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      // Token has expired or is invalid
      return null;
    } else {
      console.error("Error verifying token:", error);
      return null;
    }
  }
};
