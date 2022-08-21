import Blog from "./json/blog.json";
export default function handler(req, res) {
  res.status(200).json(Blog);
}
