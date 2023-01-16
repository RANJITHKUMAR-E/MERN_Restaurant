import React from "react";

export default function Loading() {
  return (
    <>
      <div
        className="spinner-border"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          marginTop: "200px",
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
