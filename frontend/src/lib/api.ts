const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getMenu() {
  const res = await fetch(`${API_URL}/api/menu`);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}

export async function getStatus() {
  const res = await fetch(`${API_URL}/api/status`);
  if (!res.ok) throw new Error("Failed to fetch status");
  return res.json();
}
