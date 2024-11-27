const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-cache",
  });
  const shoes = await res.json();
  return (
    <div>
      <h1>All Shoes</h1>
      <div className="grid grid-cols-3 gap-6">
        {shoes.map((shoe) => (
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
    </div>
  );
};

export default AllShoesPage;
