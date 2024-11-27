"use client";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-4xl text-red-400">Something went wrong!!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorPage;
