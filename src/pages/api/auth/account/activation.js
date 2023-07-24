// import { ApiError } from "next/dist/server/api-utils";
import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.post("auth/users/activation/", req.body);
    res.status(200).json({
      message: "Account activated",
      data: data
    });
  } catch (error) {
    const message =
      error.response.status === 403
        ? "Account is active, please login"
        : "Try again later";

    res.status(400).json({
      message: message,
      errors: null
    });
  }
}
