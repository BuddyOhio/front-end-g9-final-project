import CircularProgress from "@mui/material/CircularProgress";


export const Loader = () => {
  return (
    <div className="flex justify-center align-middle mx-auto my-auto">
      <CircularProgress size={150} className="" />
    </div>
  );
};
