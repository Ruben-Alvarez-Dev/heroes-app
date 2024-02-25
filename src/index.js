import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp";
import "./style.css";

const root = createRoot(document.getElementById("root"));
root.render(

    <>
        <HeroesApp />
    </>
);
