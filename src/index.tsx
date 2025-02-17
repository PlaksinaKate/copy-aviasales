import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure you have <div id='root'></div> in your index.html"
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render("Hello");
