import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "POST")
    res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.post("auth/jwt/create/", req.body);
    res.status(200).json({
      message: "Login successful",
      data: data
    });
  } catch (error) {
    const status = error?.response?.status;
    const message = status === 400 ? "Invalid credentials" : "Try again later";
    const errors = error?.response?.data ?? null;

    res.status(401).json({
      message: message,
      errors: errors
    });
  }
}
