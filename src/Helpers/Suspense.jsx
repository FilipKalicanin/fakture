import React, { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <CircularProgress
    color='secondary'
    sx={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
);

export default function SuspenseContainer(props) {
  return <Suspense fallback={<Loader />}>{props.children}</Suspense>;
}
