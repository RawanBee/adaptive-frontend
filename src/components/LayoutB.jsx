import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const barChartOptions = {
  chart: { type: "column", backgroundColor: "transparent" },
  title: { text: "" },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    labels: { style: { color: "#1B262C" } },
    lineColor: "#1B262C",
    tickColor: "#1B262C",
  },
  yAxis: {
    title: { text: "Users", style: { color: "#1B262C" } },
    labels: { style: { color: "#1B262C" } },
    gridLineColor: "#1B262C",
  },
  plotOptions: {
    column: {
      borderWidth: 2,
      borderColor: "transparent",
      dataLabels: {
        enabled: true,
        color: "#1B262C",
        style: {
          textOutline: "none",
          fontWeight: "600",
          color: "#1B262C",
        },
      },
    },
  },
  series: [
    {
      name: "Users",
      data: [50, 80, 60, 90, 100],
      color: "#3282B8",
    },
  ],
  legend: { itemStyle: { color: "#1B262C" } },
  credits: { enabled: false },
};

const donutChartOptions = {
  chart: { type: "pie", backgroundColor: "transparent" },
  title: { text: "" },
  plotOptions: {
    pie: {
      innerSize: "60%",
      dataLabels: {
        enabled: true,
        style: {
          color: "#1B262C",
          textOutline: "none",
          fontWeight: "bold",
        },
      },
    },
  },
  series: [
    {
      data: [
        { name: "Jan", y: 10, color: "#3282B8" },
        { name: "Feb", y: 7, color: "#FF9D23" },
        { name: "Mar", y: 30, color: "#0F4C75" },
        { name: "Apr", y: 40, color: "#FF9D23" },
        { name: "May", y: 13, color: "#0F4C75" },
      ],
    },
  ],
  credits: { enabled: false },
};

const LayoutB = () => {
  return (
    <>
      <Typography p={3} variant="h4" mb={3} color="white" fontWeight={600}>
        Advanced User Dashboard
      </Typography>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#A3D8FF", color: "#1B262C" }}>
              <CardContent>
                <Typography variant="h4">400+</Typography>
                <Typography>Total Users</Typography>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={donutChartOptions}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#FF9D23", color: "#1B262C" }}>
              <CardContent>
                <Typography variant="h4">68%</Typography>
                <Typography>User Retention</Typography>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={barChartOptions}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#FDFFC2", color: "#1B262C" }}>
              <CardContent>
                <Typography variant="h4">56%</Typography>
                <Typography>Revenue</Typography>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={donutChartOptions}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#0F4C75", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Net Profit</Typography>
                <Typography variant="h5">$7.0k</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#3282B8", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Expenses</Typography>
                <Typography variant="h5">$2.5k</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "#BBE1FA", color: "#1B262C" }}>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h5">$3.1k</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LayoutB;
