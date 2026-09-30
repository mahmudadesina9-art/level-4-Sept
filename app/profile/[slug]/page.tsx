"use client";
import React, { use } from "react";

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  return (
    <div>
      <h1>This is {slug} page</h1>
    </div>
  );
};

export default page;
