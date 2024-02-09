import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteTwoTone";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const AllActivity = () => {
  const { userActivities, deleteUserActivity } = useGlobalContext();
  // const userActivitiesShow = userActivities.sort(
  //   (a, b) => b.activityDateTime - a.activityDateTime
  // );

  const handleDelete = (activityId) => {
    console.log("Delete Activity Id: ", activityId);
    deleteUserActivity(activityId);
  };

  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
          All Activity
        </h1>

        <div className="bg-white grid sm:grid-cols-2 xl:grid-cols-3 gap-8 p-10 ">
          {userActivities.map((userAvtivity) => {
            const {
              activityDate,
              activityDateStr,
              activityDesc,
              activityDuration,
              activityId,
              activityName,
              activityTimeStr,
              activityType,
              activityTypeOther,
            } = userAvtivity;
            {
              /* 
                  activityDate: "2024-02-14T22:30:00.000Z"
                  activityDateStr: "Thu Feb 15 2024"
                  activityDesc: "aaa"
                  activityDuration: "30"
                  activityId: "65bbadb1461d0c897f0065c2"
                  activityName: "aaa"
                  activityTimeStr: "05:30"
                  activityType: "Run"
                  activityTypeOther: ""
              */
            }
            return (
              <Card
                sx={{ maxWidth: 345 }}
                key={activityId}
                className="justify-self-center w-full"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={
                    activityType === "Football"
                      ? "../picture/activity-football-card.jpg"
                      : activityType === "Swim"
                      ? "../picture/activity-swim-card.jpg"
                      : activityType === "Run"
                      ? "../picture/activity-run-card.jpg"
                      : activityType === "Walk"
                      ? "../picture/activity-walk-card.jpg"
                      : activityType === "Hike"
                      ? "../picture/activity-hike-card.jpg"
                      : activityType === "Bicycle"
                      ? "../picture/activity-bicycle-ride-card.jpg"
                      : "../picture/activity-card.jpg"
                  }
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {activityName}
                  </Typography>

                  <Box variant="body2" color="text.secondary">
                    <Typography>Date: {activityDateStr}</Typography>
                    <Typography>Time: {activityTimeStr}</Typography>
                    <Typography>Duration: {activityDuration} min.</Typography>
                    {/* <Typography>Status: {activityStatus}</Typography> */}
                  </Box>
                </CardContent>

                <CardActions className="flex justify-between">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      console.log("Edit Activity ID: ", activityId)
                    }
                  >
                    <Link to={`/edit-activity/${activityId}`}>Edit</Link>
                  </Button>

                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => handleDelete(activityId)}
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
