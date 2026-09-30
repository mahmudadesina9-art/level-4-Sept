"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface User {
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

const page = () => {
  const router = useRouter();

  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUsers: User[] = await data.json();
    setUsers(allUsers);
  }

  const userDetails = (params: { id: number; username: string }) => {
    router.push(`/dashboard/all-users/${params.id}`);
  };

  return (
    <div className="text-emerald-600 text-4xl text-center mt-20">
      <h1>Welcome to user dashboard</h1>
      {users ? (
        users.map((user) => (
          <div
            key={user.id}
            onClick={() =>
              userDetails({ id: user.id, username: user.username })
            }
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
        ))
      ) : (
        <h1 className="text-2xl text-red-500 text-center mt-18">
          Failed to fetch users
        </h1>
      )}
    </div>
  );
};

export default page;
