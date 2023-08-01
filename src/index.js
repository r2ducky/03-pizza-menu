import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "The Chef's Special",
    ingredients: "Local ingredients, freshly picked every day",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// All the functions you see here are components
// so each function is a component function we will
// add to main App function
function Header() {
  // styling components
  // use style in html, first curly brace is to tell
  // react that we are about to use JS
  // second curly brace is to indicate we are altering
  // object.
  // We are styling using inline JS, instead of a css
  // framework for now.
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Rag's React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian Cuisine. 6 creative pizzas to choose from. All
            from our sotne oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p> We are still working on our menu. Please check back in soon! </p>
      )}

      {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Onions, Mushrooms, Mozerella"
        photoName="pizzas/funghi.jpg"
        price={11}
      />

      <Pizza
        name="Pizza Salmino"
        ingredients="Pepperoni, Canadian Bacon, Italian Sausage"
        photoName="pizzas/salamino.jpg"
        price={13}
      />

      <Pizza
        name="Chef's Special"
        ingredients="made with local ingredients, changes daily"
        photoName="pizzas/prosciutto.jpg"
        price={13}
      /> */}
    </div>
  );
}

// component function always starts with uppercase letter
// function needs some type of mark up
// Pizza Component
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? (
            <span>SOLD OUT</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // const isOpen = hour >= openHour && hour <= closeHour) alert("we're currently open!");
  // else alert("We're closed!");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We are happy to serve you when we are open!</p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  <div className="order">
    <p>Come visit us, or order online!</p>
    <p>
      Open Mon-Sat {openHour}:00PM to {closeHour - 12}:00PM
    </p>
    <button className="btn">Order</button>
  </div>;
}

// How to render in React v18
// if you go to the folder 'public' and then open
// index.html, there will be <div> in there with the
// the id of "root". We need to put that id in here
// so App() is rendered to display on webpage

// Strict mode during development will render
// components twice and check for bugs
// react will also check for outdated parts of
// React API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// if you want to start application, use the command:
//      npm start
// to find the file with all the npm commands, locate
// the package.json file in the project
// it will be under scripts
