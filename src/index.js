import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Mlaformat from "./components/lessons/mlaformat";
import PunCla from "./components/lessons/punctuation-clauses";
import FigLang from "./components/lessons/figurative-language";
import ArtGram from "./components/lessons/articles-grammar";
import DiweiTran from "./components/lessons/diwei-translation";
import AtIn from "./components/lessons/at-in";
import PreSuf from "./components/lessons/prefix-suffix";
import EML from "./components/lessons/eml";
import WillDo from "./components/lessons/will-do";
import AdjOrder from "./components/lessons/adjective-order";
import Essays from "./components/lessons/essays";
import DescOld from "./components/lessons/desc-old";
import NPP from "./components/lessons/npp";
import NewWords from "./components/lessons/new-words";
import Idioms from "./components/lessons/idioms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Modal />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/",
    element: <Main />,
  },
  {
    path: "/:language/mlaformat",
    element: <Mlaformat />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/punctuation-and-clauses",
    element: <PunCla />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/figurative-language",
    element: <FigLang />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/articles-grammar",
    element: <ArtGram />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/diwei-translation",
    element: <DiweiTran />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/at-in",
    element: <AtIn />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/prefix-suffix",
    element: <PreSuf />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/eml",
    element: <EML />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/will-do",
    element: <WillDo />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/adjective-order",
    element: <AdjOrder />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/essays",
    element: <Essays />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/desc-old",
    element: <DescOld />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/npp",
    element: <NPP />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/new-words",
    element: <NewWords />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/new-words",
    element: <NewWords />,
    errorElement: "<div>Error</div>",
  },
  {
    path: "/:language/idioms",
    element: <Idioms />,
    errorElement: "<div>Error</div>",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
