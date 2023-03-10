import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app">
        <Search />
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://lena-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olena Miniailo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/OlenaValentynivna/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://meek-cobbler-73d805.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
