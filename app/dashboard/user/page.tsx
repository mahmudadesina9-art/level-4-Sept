// import { useRouter } from "next/navigation";
import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
}

const page = async () => {
  // const router = useRouter();
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await data.json();

  // const userDetails = (params: { id: number; username: string }) => {
  //   router.push(`/dashboard/user/${params.username}`);
  // };

  return (
    <div className="text-emerald-600 text-4xl text-center mt-20">
      <h1>Welcome to user dashboard</h1>
      {users.map((user) => (
        <div
          key={user.id}
          // onClick={() => userDetails({ id: user.id, username: user.username })}
          className="text-xl text-orange-500 text-center mt-18 cursor-pointer"
        >
          <h1>Name: {user.name}</h1>
          <h1>Username: {user.username}</h1>
          <h1>Email: {user.email}</h1>
          <h1>
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city}
          </h1>
          <h1>Phone: {user.phone}</h1>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default page;
