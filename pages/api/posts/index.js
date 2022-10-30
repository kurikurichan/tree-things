import connectMongo from "../../../lib/connectdb";
import Post from "../../../models/Post";

connectMongo();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        console.log("Fetching All Projects");
        const posts = await Post.find({});
        console.log("All Projects Fetched");

        res.status(200).json({ success: true, data: posts });
      } catch (err) {
        console.log(err);
        res.json({ err });
      }
      break;

    case "POST":
      try {
        console.log("CREATING Tree Post");
        const post = await Post.create(req.body);
        console.log("CREATED Tree Post");

        res.status(201).json({ success: true, data: post });
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
      break;
  }
}
