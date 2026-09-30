import User from "@/lib/models/Users";
import { ConnectDb } from "@/lib/util/db/connectDb";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  await ConnectDb();
  const { slug } = await params;
  console.log(slug);
  let data = await req.json();
  console.log(data);
  try {
    let user = await User.findByIdAndUpdate(slug, data, {
      returnDocument: "after",
    }).then((res) => {
      console.log("Response", res);

      return Response.json(
        {
          message: "User updated",
          data: res,
        },
        {
          status: 200,
        },
      );
    });
    console.log("Dataaa", user);
    return Response.json(
      {
        message: "User details updated succesfully",
        data: user,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("Error Occured", error);
  }
}
