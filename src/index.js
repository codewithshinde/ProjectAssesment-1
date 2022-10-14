import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
// import Demo from './demo';
import CandidateTable from "./public/src/components/candidateTable/CandidateTable";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CandidateTable />
    </StyledEngineProvider>
  </React.StrictMode>
);
