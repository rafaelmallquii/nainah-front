import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "POST")
    res.status(405).json({ error: "Method not allowed" });

  try {
    await api.post("api/subscriber/", req.body);
    res.status(201).json({ message: "Subscription success" });
  } catch (error) {
    res.status(400).json({ message: "Subscription error" });
  }
}
