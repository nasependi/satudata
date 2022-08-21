import Popular from "./json/popular.json";

export default function handler(req, res) {
  res.status(200).json(Popular);
}
