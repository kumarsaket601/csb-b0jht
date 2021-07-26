import "./styles.css";
import React, { useState } from "react";

const travleList = {
  Greece: [
    {
      name: "Santorini",
      rating: "5/5"
    },
    {
      name: "Mykonos",
      rating: "4/5"
    },
    {
      name: "Corfu",
      rating: "3/5"
    }
  ],
  Italy: [
    {
      name: "Cinque Terre",
      rating: "3/5"
    },
    {
      name: "Milan",
      rating: "4/5"
    },
    {
      name: "Stelvio pass",
      rating: "5/5"
    }
  ],

  Natural_Wonder: [
    {
      name: "Victoria Fall (Africa)",
      rating: "5/5"
    },
    {
      name: "Ha long Bay (vietnam)",
      rating: "4/5"
    },
    {
      name: "Pamukkale (Turkey)",
      rating: "4.5/5"
    }
  ]
};

var newList = Object.keys(travleList);

export default function App() {
  var [meaning, setMeanign] = useState("Greece");

  function clickHandler(item) {
    setMeanign(item);
  }

  return (
    <div className="App">
      <h1 style={{ marginRight: "8.5rem", color: "white" }}>
        {" "}
        🌇 Travel & Place
      </h1>
      <p style={{ marginLeft: "1rem", color: "white" }}>
        {" "}
        Here is the list of some the travel place.Check it out !!!
      </p>

      {newList.map((item) => (
        <button
          onClick={() => clickHandler(item)}
          style={{
            backgroundColor: "#28262C",
            color: "white",
            fontSize: "15px",
            textAlign: "left",
            border: "0.5rem",
            borderRadius: "0.5rem",
            padding: "1rem 2rem",
            margin: "0.5rem 0.5rem",
            marginLeft: "1rem"
          }}
        >
          {item}
        </button>
      ))}
      <hr />

      <div>
        <ul>
          {travleList[meaning].map((name) => (
            <li
              style={{
                backgroundColor: "#28262C",
                listStyle: "none",
                margin: "1rem auto",
                padding: "2rem 2rem",
                border: "0.2rem ",
                textAlign: "left",
                borderRadius: "0.5rem",
                color: "white",
                width: "24rem"
              }}
            >
              <div style={{ fontSize: "x-large", color: "yellow" }}>
                {name.name}
              </div>

              <div style={{ fontSize: "medium" }}>{name.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
