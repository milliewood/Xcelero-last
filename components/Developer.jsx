import React from "react";

const Developer = () => {
  return (
    <div
      style={{
        padding: "20px",
        width: "330px",
        minHeight: "370px",
        borderRadius: "20px",
        background: "white",
        boxShadow: "5px 5px 6px #dadada, -5px -5px 6px #f6f6f6",
        transition: "0.4s",
        "@media (max-width: 480px)": {
          width: "100%",
          minHeight: "auto",
        },
      }}
      className="card"
    >
      <div
        style={{
          minHeight: "270px",
          backgroundImage: 'url("/images/ceo2.jpeg")',
          backgroundSize: "cover",
          borderRadius: "15px",
          backgroundPosition: "center",
          boxShadow: "inset 8px 8px 10px #c3c3c3, inset -8px -8px 10px #cfcfcf",
        }}
        className="card-image"
      ></div>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#2e54a7",
          margin: "15px 0 0 10px",
        }}
        className="card-title"
      >
        Ceo Xcelero
      </p>
      <p
        style={{
          margin: "13px 0 0 10px",
          color: "rgb(31, 31, 31)",
          fontSize: "15px",
        }}
        className="card-body"
      >
        &ldquo;As we embark on this exciting new chapter, we will seize every
        opportunity to disrupt the industry, push boundaries, and redefine
        what's possible.&ldquo;
      </p>
      <p
        style={{
          float: "right",
          margin: "28px 0 0 18px",
          fontSize: "13px",
          color: "#636363",
          position: "relative",
          top: "-2rem",
        }}
        className="footer"
      >
        Dictated by<span style={{ fontWeight: "700" }} className="by-name ml-1">
          xcelero
        </span>{" "}
        on <span className="date">25/05/23</span>
      </p>
    </div>
  );
};

export default Developer;
