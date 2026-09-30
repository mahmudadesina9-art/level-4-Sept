import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>
        Catch all slugs{" "}
        {slug.map((item, i) => (
          <span key={i} className="mx-5">
            {item}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default page;
