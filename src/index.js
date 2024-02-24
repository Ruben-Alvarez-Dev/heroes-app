import { createRoot } from "react-dom/client";
import { AppRouter } from "./routers/AppRouter";

import "./style.css";

const root = createRoot(document.getElementById("root"));
root.render(<AppRouter />);
