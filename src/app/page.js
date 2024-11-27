import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Home page",
  description: "This is home page description",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();
  throw new Error("Error from home page");
  return (
    <div>
      <h1 className="text-center text-2xl">Welcome to next JS home page</h1>
      <div className="flex justify-between">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl p-5">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe.title}</h2>
              <div className="badge badge-secondary">${shoe.price}</div>
              <p>{shoe.description}</p>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Buy now</div>
                <div className="badge badge-outline">Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes" className=" text-center my-8">
        <button className="btn btn-primary mx-auto">Show more</button>
      </Link>
    </div>
  );
};

export default HomePage;
