import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const LayoutA = () => {
  return (
    <>
      <Typography p={3} variant="h4" mb={3} color="white" fontWeight={600}>
        Beginner User Dashboard
      </Typography>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "secondary.main", color: "white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Getting Started
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="📝 Step-by-step tutorials" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="✅ Getting started checklist" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="💡 Helpful tips and tricks" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: "info.main", color: "white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Welcome to Adaptive UI
                </Typography>
                <Typography variant="body2">
                  Your interface will adapt based on your interactions to give
                  you the best experience possible.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LayoutA;
