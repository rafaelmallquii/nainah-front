import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.post("auth/users/", req.body);
    res.status(200).json({
      message: "Signup successful",
      data: data
    });
  } catch (error) {
    const status = error?.response?.status;
    const message = status === 400 ? "Invalid credentials" : "Try again later";
    const errors = error?.response?.data ?? null;

    res.status(400).json({
      message: message,
      errors: errors
    });
  }
}
