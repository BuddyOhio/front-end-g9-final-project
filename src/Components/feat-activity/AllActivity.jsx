import React from "react";
import { useGlobalContext } from "../Context"; // Adjust the path as per your file structure
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { Link } from "react-router-dom";
// import run from "../../../public/run.svg";
// import hike from "../../../public/hike.svg";
// import walk from "../../../public/walk.svg";
// import swimg from "../../../public/swimg.svg";
// import cycling from "../../../public/cycling.svg";
// import sports from "../../../sports/run.svg";

const AllActivity = () => {
  const { userActivities, deleteUserActivity } = useGlobalContext();

  const handleDelete = (activityId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserActivity(activityId);
        Swal.fire({
          title: "Deleted!",
          text: "Your activity has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleDeleteButtonClick = (activityId, event) => {
    event.preventDefault();
    handleDelete(activityId);
  };

  return (
    <NavbarDesktop>
      <div className="grow bg-white pt-20">
        <div>
          <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
            All Activity
          </h1>
        </div>
        <div className="bg-white grid sm:grid-cols-2 xl:grid-cols-3 gap-8 p-10 ">
          {userActivities.map((userActivity) => {
            const {
              activityDateStr,
              activityTimeStr,
              activityDuration,
              activityId,
              activityName,
              activityType,
            } = userActivity;

            return (
              <Card
                sx={{ maxWidth: 345 }}
                key={activityId}
                className="justify-self-center w-full rounded-2xl"
                
              >
                <CardMedia
                className="bg-cyan-100"
                  sx={{ height: 140 }}
                  image={
                    activityType === "Swim"
                      ? "../../../public/swimg.svg"
                      : activityType === "Run"
                      ? "../../../public/run.svg"
                      : activityType === "Walk"
                      ? "../../../public/walk.svg"
                      : activityType === "Hike"
                      ? "../../../public/hike.svg"
                      : activityType === "Bicycle"
                      ? "../../../public/cycling.svg"
                      : "../../../public/sports.svg"
                  }
                  title="Activity Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {activityName}
                  </Typography>
                  <Box variant="body2" color="text.secondary">
                    <Typography>Date: {activityDateStr}</Typography>
                    <Typography>Time: {activityTimeStr}</Typography>
                    <Typography>Duration: {activityDuration} min.</Typography>
                  </Box>
                </CardContent>
                <CardActions className="flex justify-between">
                  <Button
                    className="rounded-lg bg-amber-400 text-white border-none"
                    variant="outlined"
                    onClick={() =>
                      console.log("Edit Activity ID: ", activityId)
                    }
                  >
                    <Link to={`/edit-activity/${activityId}`}>Edit</Link>
                  </Button>
                  <Button
                    size="small"
                    className="rounded-lg bg-red-600 text-white border-none"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={(event) =>
                      handleDeleteButtonClick(activityId, event)
                    }
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </NavbarDesktop>
  );
};

export default AllActivity;
