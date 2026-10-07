import User from "@/lib/models/Users";
import { ConnectDb } from "@/lib/util/db/connectDb";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default interface UserType {
  id: number;
  name: string;
  age: number;
  gender: string;
  amount: number;
  email: string;
  password: string;
}

export const users: UserType[] = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    gender: "male",
    amount: 2000,
    email: "john@gmail.com",
    password: "fish",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 20,
    gender: "female",
    amount: 4000,
    email: "jane@gmail.com",
    password: "fish2",
  },
  {
    id: 3,
    name: "Peter Parker",
    age: 20,
    gender: "male",
    amount: 5000,
    email: "peter@gmail.com",
    password: "fish3",
  },
  {
    id: 4,
    name: "Mary Jane",
    age: 20,
    gender: "female",
    amount: 6000,
    email: "mary@gmail.com",
    password: "fish4",
  },
];

export async function GET() {
  await ConnectDb();
  const allUsers = await User.find();

  if (!allUsers) {
    return Response.json(
      {
        message: "No registered users",
      },
      { status: 404 },
    );
  }

  return Response.json(
    {
      message: "I got your login request",
      data: allUsers,
    },
    { status: 200 },
  );
}

export async function POST(params: NextRequest) {
  //   console.log(await params.json());
  let userDetails = await params.json();

  let user = await User.findOne({
    email: userDetails.email,
  });

  let passwordValidation = await bcrypt.compare(
    userDetails.password,
    user.password,
  );

  if (!passwordValidation) {
    return Response.json(
      {
        message: "Invalid password or email",
        data: "",
      },
      {
        status: 404,
      },
    );
  }

  if (!user) {
    return Response.json(
      {
        message: "Invalid password or email",
        data: "",
      },
      {
        status: 404,
      },
    );
  }
  let SECRET = process.env.JWT_SECRET;

  if (!SECRET) {
    throw new Error("Secret required");
  }

  let token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      gender: user.gender,
    },
    SECRET,
    {
      expiresIn: "2h",
    },
  );

  (await cookies()).set(token, `token: ${token}`, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  //   users.push({ ...newUser, id: newId });
  return Response.json(
    {
      message: "Login succesful",
      data: {
        user,
        token,
      },
    },
    {
      status: 200,
    },
  );
}

export async function PATCH(params: NextRequest) {
  const { searchParams } = new URL(params.url);
  const id = searchParams.get("id");
  console.log(id);
  let param = await params.json();
  console.log(param);

  let user = users.find((c) => c.id == Number(id));
  if (!user) {
    return Response.json(
      {
        message: "I got your login post request",
        data: "User not found",
      },
      {
        status: 404,
      },
    );
  }

  user = { ...user, ...param };
  users[Number(id) - 1] = user!;

  return Response.json(
    {
      message: "I got your login post request",
      data: {
        updatedUser: user,
        allUser: users,
      },
    },
    {
      status: 201,
    },
  );
}
