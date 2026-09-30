import User from "@/lib/models/Users";
import { ConnectDb } from "@/lib/util/db/connectDb";

export async function POST(req: Request) {
  await ConnectDb();
  console.log("running o");
  const data = await req.json();
  const newUser = await User.create(data);

  if (!newUser) {
    return Response.json({ message: "Failed to create user" }, { status: 401 });
  }

  return Response.json(
    {
      message: "User creted succesfully",
      data: newUser,
    },
    { status: 201 },
  );
}
