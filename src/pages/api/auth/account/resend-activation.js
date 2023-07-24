import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.post("auth/users/resend_activation/", req.body);
    res.status(200).json({
      message: "Activation email sent",
      data: data
    });
  } catch (error) {
    res.status(400).json({
      message: "Try again later",
      errors: null
    });
  }
}
