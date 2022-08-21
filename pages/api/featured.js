import Featured from "./json/featured.json";

export default function handler(req, res) {
  res.status(200).json(Featured);
}
