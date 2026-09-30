import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // console.log(slug);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`,
  );
  const user = await data.json();
  return (
    <div className="text-3xl text-purple-600 text-center mt-10">
      <h1>This page is for this {slug}</h1>
      <div className="text-xl text-orange-500 text-center mt-18 cursor-pointer">
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
    </div>
  );
};

export default page;
