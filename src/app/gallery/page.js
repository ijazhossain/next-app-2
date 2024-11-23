import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1>Image optimizations</h1>
      <h2 className="text-center">Regular image</h2>
      <img
        src="https://images.unsplash.com/photo-1732089784928-d1a4cac61912?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        width={500}
        height={300}
        className="mx-auto"
      />
      <h2 className="text-center">Next image</h2>
      <Image
        src="https://images.unsplash.com/photo-1732089784928-d1a4cac61912?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        width={500}
        height={300}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
