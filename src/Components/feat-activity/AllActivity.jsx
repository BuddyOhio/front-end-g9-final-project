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

const AllActivity = () => {
  const { userActivities, deleteUserActivity } = useGlobalContext();
  const userActivitiesShow = userActivities.sort(
    (a, b) => b.activityDateTime - a.activityDateTime
  );

  const handleDelete = async (activityId) => {
    await deleteUserActivity(activityId);
    await console.log("Delete Activity Id: ", activityId);
  };

  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
          All Activity
        </h1>
        <div className="bg-white grid sm:grid-cols-2 xl:grid-cols-3 gap-8 p-10 ">
          {userActivitiesShow.map((userAvtivity, index) => {
            const {
              userId,
              activityId,
              activityName,
              activityDesc,
              activityType,
              activityDateTime,
              activityDuration,
              activityStatus,
            } = userAvtivity;

            const activityDateTimeArray = activityDateTime
              .toString()
              .split(" ");
            // const activityDateTimeShow = `${activityDateTime.toString()}`;
            const activityDateShow = `${activityDateTimeArray[0]}, ${activityDateTimeArray[1]} ${activityDateTimeArray[2]} ${activityDateTimeArray[3]}`;
            const activityTimeShow = `${activityDateTimeArray[4]}`;
            return (
              <Card
                sx={{ maxWidth: 345 }}
                key={index}
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
                    {activityType}
                  </Typography>

                  <Box variant="body2" color="text.secondary">
                    <Typography>Date: {activityDateShow}</Typography>
                    <Typography>Time: {activityTimeShow}</Typography>
                    <Typography>Duration: {activityDuration}</Typography>
                    <Typography>Status: {activityStatus}</Typography>
                  </Box>
                </CardContent>

                <CardActions className="flex justify-between">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      console.log("Edit Activity ID: ", activityId)
                    }
                  >
                    Edit
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
