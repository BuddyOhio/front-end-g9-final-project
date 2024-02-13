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
import Modal from '@mui/material/Modal';

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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <NavbarDesktop>
      <div className="grow bg-white pt-20">
        <div>
          <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
            All Activity
          </h1>
        </div>
        <div>
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
              activityDesc,
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
                    <Typography>Discription: {activityDesc}</Typography>
                  </Box>
                </CardContent>
                <CardActions className="flex justify-end">
                <Button
                    className="rounded-lg bg-green-500 text-white border-none"
                    variant="outlined"
                    color="error"
                  >
                    Complete
                  </Button>
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
