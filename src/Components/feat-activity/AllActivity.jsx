import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

import { CustumnContext } from "./Context.jsx";
import { useContext } from "react";

const AllActivity = () => {
  const { activities, deleteActivity } = useContext(CustumnContext);

  const handleDelete = async (id) => {
    await deleteActivity(id);
  };
  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
          All Activity
        </h1>
        <div className="bg-white grid lg:grid-cols-2 xl:grid-cols-3 gap-8 p-10">
          {activities.map((items, index) => (
            <Card
              sx={{ maxWidth: 345 }}
              key={index}
              className="justify-self-center w-full"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={
                  items.name === "Football"
                    ? "../../../public/activity-football-card.jpg"
                    : items.name === "Swimming"
                    ? "../../../public/activity-swim-card.jpg"
                    : items.name === "Run"
                    ? "../../../public/activity-run-card.jpg"
                    : items.name === "Walk"
                    ? "../../../public/activity-walk-card.jpg"
                    : items.name === "Hike"
                    ? "../../../public/activity-hike-card.jpg"
                    : items.name === "Bicycle Ride"
                    ? "../../../public/activity-bicycle-ride-card.jpg"
                    : "../../../public/activity-card.jpg"
                }
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {items.name}
                </Typography>
                <Box variant="body2" color="text.secondary">
                  <Typography>Status: {items.status}</Typography>
                  <Typography>
                    Date: {items.date} {items.time}
                  </Typography>
                  <Typography>Duration: {items.duration}</Typography>
                </Box>
              </CardContent>
              <CardActions className="flex justify-between">
                <Button variant="outlined">Edit</Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => handleDelete(items.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </NavbarDesktop>
  );
};

export default AllActivity;
