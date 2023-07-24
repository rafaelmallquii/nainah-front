import api from "@/lib/helpers/api/remote";

export const withAuth = (handler) => {
  return (req, res) => {
    const { authorization } = req.headers;

    if (!authorization)
      return res
        .status(401)
        .json({ error: "The authorization header is required" });

    const token = authorization.split(" ")[1];

    api
      .post("auth/jwt/verify", { token })
      .then((data) => {
        req.auth = { user: data };
        handler(req, res);
      })
      .catch((error) => {
        return res.status(401).json({ error: "Unauthorized" });
      });
  };
};
