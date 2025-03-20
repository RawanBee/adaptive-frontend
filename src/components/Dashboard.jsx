import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import LayoutA from "./LayoutA";
import LayoutB from "./LayoutB";
import useClicksTracker from "../hooks/useClicksTracker";
import useScrollTracker from "../hooks/useScrollTracker";

const Dashboard = () => {
  const layout = useSelector((state) => state.ui.layout);
  useClicksTracker();
  useScrollTracker();

  return (
    <Box maxHeight="100vh">
      {layout === "A" ? <LayoutA /> : <LayoutB />}
    </Box>
  );
};

export default Dashboard;
