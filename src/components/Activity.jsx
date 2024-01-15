import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/DeleteTwoTone";

import { data } from "../data/data.js";
import { useState } from "react";

const Activity = () => {
  const [activity, setActivity] = useState(data);

  const handleDelete = (id) => {
    const updateActivity = activity.filter((item) => item.id !== id);
    setActivity(updateActivity);
  };

  const ActivityCard = () => {
    // Update Activity
    // const update = (data) => {
    //   const upDateActivty = activity.map((item) => {
    //     if (item.id === data.id) {
    //       return data;
    //     }
    //     return item;
    //   });
    //   setActivity(upDateActivty);
    // };

    // Delete Activity Function

    // Return
    return activity.map((items, index) => (
      <Card
        sx={{ maxWidth: 345 }}
        key={index}
        className="justify-self-center w-full"
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"
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
    ));
  };

  //Last Activity Nav
  const LastActivity = () => {
    return (
      <div>
        <article className="flex-col h-full gap-3 text-xs bg-white px-6 hidden lg:flex lg:min-w-[16rem] xl:w-[22rem] 2xl:w-[26rem] 2xl:text-lg">
          <div className="py-3">
            <h2 className="text-blue-900 text-xl font-extrabold xl:text-2xl">
              Latest Activity
            </h2>
          </div>

          {activity.map((items, index) => (
            <div
              key={index}
              className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
            >
              <div className="absolute w-1/3 left-[-15%]">
                <img
                  src="../picture/1.svg"
                  alt="trophie"
                  className="w-full h-full"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-base xl:text-xl 2xl:text-2xl">
                  {items.name}
                </div>
                <div className="flex justify-end gap-3">
                  <h3>{items.date}</h3>

                  <Link to="/card" className=" hover:scale-110">
                    <img
                      src="../picture/settings-gear-svgrepo-com.svg"
                      alt="clock"
                      className="lg:w-4 xl:w-5"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div
                  className={
                    items.status === "Upcoming"
                      ? "bg-[#ffd05b] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : items.status === "Ongoing"
                      ? "bg-[#FF4545] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : items.status === "Finished"
                      ? "bg-[#0eb400] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : "bg-gray-200 px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                  }
                >
                  {items.status}
                </div>
                <div className="flex justify-end gap-2 2xl:gap-3">
                  <h3>{items.time}</h3>
                  <h3>{items.duration}</h3>
                  <img
                    src="../picture/clock-regular.svg"
                    alt="clock"
                    className="lg:w-4 xl:w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    );
  };

  return { ActivityCard, LastActivity };
};

export default Activity;
