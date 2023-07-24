import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "GET")
    res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.get("api/catalog/");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error?.response?.data });
  }
}
