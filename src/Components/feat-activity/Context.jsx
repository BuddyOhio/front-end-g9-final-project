// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const CustumnContext = createContext({});

// export const CustumnContextProvider = ({ children }) => {
//   const [reload, setReload] = useState(false);
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get(
//           "https://65aa451f081bd82e1d968210.mockapi.io/activites/activities"
//         );
//         // console.log(response.data); // Log the response data
//         setActivities([...response.data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getData();
//   }, [reload]);

//   const createActivity = async (name, status, date, time, duration) => {
//     const response = await axios.post(
//       "https://65aa451f081bd82e1d968210.mockapi.io/activites/activities",
//       {
//         name: name,
//         status: status,
//         date: date,
//         time: time,
//         duration: duration,
//       }
//     );

//     // const format = {
//     //   date: "Fri 13 01 2024",
//     //   date: {day: "Fri", date: "13", month: "1", year: "2024"},
//     //   duration: "30 mins",
//     //   id: "2",
//     //   name: "Tennis",
//     //   status: "Finished",
//     //   time: "19:00",
//     // };

//     if (response.status === 201 && response.data) {
//       alert(time);
//       setReload(!reload);
//     } else {
//       alert("Failed to create");
//     }
//   };

//   const deleteActivity = async (id) => {
//     const response = await axios.delete(
//       `https://65aa451f081bd82e1d968210.mockapi.io/activites/activities/${id}`
//     );
//     if (response.status === 200 && response.data) {
//       alert("Activity have been remove");
//       setActivities((allActivites) =>
//         allActivites.filter((activity) => activity.id !== id)
//       );
//       setReload(!reload);
//     } else {
//       alert("Failed to remove activity");
//       setReload(!reload);
//     }
//   };

//   return (
//     <CustumnContext.Provider
//       value={{ activities, setActivities, deleteActivity, createActivity }}
//     >
//       {children}
//     </CustumnContext.Provider>
//   );
// };
