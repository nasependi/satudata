import Hello from "./json/hello.json";

export default function handler(req, res) {
  res.status(200).json(Hello);
}
