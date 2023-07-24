import api from "@/lib/helpers/api/remote";

export default async function handler(req, res) {
  if (req.method !== "GET")
    res.status(405).json({ error: "Method not allowed" });

  try {
    const { data } = await api.get("api/products/?trending=true");
    res.status(200).json(data.results);
  } catch (error) {
    res.status(400).json({ error: error?.response?.data });
  }
}
