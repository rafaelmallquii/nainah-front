import api from "@/lib/helpers/api/remote";
import { withAuth } from "../withAuth";

export default withAuth(async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
  }

  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  api.defaults.headers.Authorization = `Bearer ${token}`;

  try {
    const { data } = await api.get("auth/users/me/");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error?.response?.data });
  }
});
