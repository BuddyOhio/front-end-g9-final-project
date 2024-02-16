import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { axiosRequest } from "../../axios";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Avatar } from "@mui/material";
import ArrowBack from "../../../public/chevron-left-solid.svg";
import AvatarMale from "../../../public/avatar-male.png";
import AvatarFemale from "../../../public/avatar-female.png";
import ChangePicIcon from "../../../public/pen-to-square-regular.svg";

function EditProfile() {
  // Set Profile Image
  const [file, setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Set Value
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Set Error
  const [fullnameError, setFullnameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  const navigate = useNavigate();

  // const filePickerRef = useRef();

  // Preview image when input image
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
      console.log(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  // GET user data
  const fetchUserData = async () => {
    try {
      const response = await axiosRequest.get("/edit-profile", {
        withCredentials: true,
      }); // Make HTTP GET request to your backend endpoint
      const userData = response.data; // Extract user data from response
      const userDob = dayjs(userData.dob);

      // Set Profile Image
      const imageUrl = `http://localhost:3000/${userData.imageUrl}`;
      if (!userData.imageUrl) {
        setPreviewUrl("");
      } else {
        setPreviewUrl(imageUrl);
      }

      setFullname(userData.fullName);
      setDob(userDob);
      setGender(userData.gender);
      setWeight(userData.weight);
      setHeight(userData.height);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // UPDATE user data
  const updateUser = async () => {
    // Convert weight and height to integers
    const weightInt = parseInt(weight);
    const heightInt = parseInt(height);

    // const updateData = {
    //   fullName: fullname,
    //   dob: dob,
    //   gender: gender,
    //   weight: weightInt,
    //   height: heightInt,
    // };
    try {
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      // Include user data in the FormData
      formData.append("fullName", fullname);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("weight", weightInt);
      formData.append("height", heightInt);
      const response = await axiosRequest.put("/edit-profile", formData, {
        withCredentials: true,
      });
      alert("Successfully edit profile!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed edit profile!");
    }
  };

  // Call fetchUserData function when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Handle Button Click
  const handleClick = (e) => {
    e.preventDefault();
    setFullnameError("");
    setDobError("");
    // setEmailError("");
    setGenderError("");
    setWeightError("");
    setHeightError("");

    // Check Valid name Function
    const regex = /^[a-zA-Z][a-zA-Z ]{2,33}[a-zA-Z]$/;
    const validName = regex.test(fullname);

    // Set error message
    if (!fullname || !validName) {
      setFullnameError(
        "Fullname must be max 35 characters long and only contain letters"
      );
    }
    if (!dob) {
      setDobError("Please input date of birth!");
    }
    // if (!email) {
    //   setEmailError("Please input email!");
    // }
    if (!gender) {
      setGenderError("Please input gender!");
    }
    if (!weight) {
      setWeightError("Please input weight!");
    }
    if (!height) {
      setHeightError("Please input height!");
    }

    // Submit Form Validation
    if (!fullname || !validName || !dob || !gender || !weight || !height) {
      console.log("Failed to edit profile!");
    } else {
      // console.log(fullname, dob, email, gender, weight, height);
      // console.log(fullname, dob, gender, weight, height);
      updateUser();
      console.log("Successfully edit profile!");
    }
  };
  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <header>
          <div className="flex flex-col bg-sky-100 items-center gap-2 py-6 md:bg-white pt-[60px] md:pt-[0] md:mt-[80px]">
            {/* <!-- Header (Profile) --> */}
            <div className="grid grid-cols-3 w-full items-center ">
              {/* <!-- Go back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src={ArrowBack} alt="ArrowBack" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="whitespace-nowrap col-span-1 justify-self-center text-blue-900 font-extrabold text-lg md:text-2xl">
                <h2 className="">Profile settings</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-40 w-40 rounded-full border-[10px] border-solid border-white relative">
              {/* <!--Profile Photo  (อาจจะต้องเพิ่มให้อยู่ใน Form ที่หลัง)--> */}
              {/* <img
                src={
                  gender === "male"
                    ? "/avatar-male.png"
                    : gender === "female"
                    ? "avatar-female.png"
                    : "avatar-non.png"
                }
                className="w-full h-full object-cover rounded-full"
                alt="User profile picture"
              /> */}
              {/* <img
                src={
                  previewUrl
                    ? previewUrl
                    : gender === "male"
                    ? "/avatar-male.png"
                    : gender === "female"
                    ? "avatar-female.png"
                    : "avatar-non.png"
                }
                className="w-full h-full object-cover rounded-full"
                alt="User profile picture"
              /> */}
              <Avatar
                sx={{ width: 140, height: 140 }}
                src={
                  previewUrl
                    ? previewUrl
                    : gender === "male"
                    ? AvatarMale
                    : gender === "female"
                    ? AvatarFemale
                    : null
                }
              />
              {/* {!isValid && <p>Invalid Image!</p>} */}

              {/* <!-- Edit Photo Button --> */}
              <div>
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src={ChangePicIcon}
                    alt="edit profile picture"
                    className="absolute bottom-0 right-1 p-0.5 h-7 hover:h-8"
                  />
                </label>
                <input
                  type="file"
                  name=""
                  id="image-upload"
                  className="hidden"
                  onChange={pickedHandler}
                  accept=".jpg,.png.,jpeg"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="bg-sky-100 md:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 md:px-4 md:text-xs w-full max-w-[600px]">
            {/* Form */}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { my: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Fullname */}
              <TextField
                id="Fullname"
                label="Fullname"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                error={!!fullnameError}
                helperText={fullnameError}
                InputProps={{ sx: { borderRadius: 3 } }}
              />

              {/* Nickname */}
              {/* <TextField
                id="outlined-basic"
                label="Nickname"
                variant="outlined"
              /> */}

              {/* Date of Birth */}
              <div className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e)}
                    error={!!dobError}
                    helperText={dobError}
                    slotProps={{ textField: { fullWidth: true } }}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: dobError ? "#D32F2F" : undefined,
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: dobError ? "#D32F2F" : undefined,
                          borderRadius: "15px",
                        },
                      },
                      "& .MuiSvgIcon-root": {
                        color: dobError ? "#D32F2F" : undefined,
                      },
                    }}
                  />
                </LocalizationProvider>
                {dobError && (
                  <div className="text-[#D32F2F] text-xs mt-[3px] ml-[14px]">
                    {dobError}
                  </div>
                )}
              </div>

              {/* Email */}
              {/* <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              /> */}

              {/* Phone Number */}
              {/* <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              /> */}

              {/* Gender */}
              <FormControl error={!!genderError}>
                <InputLabel id="selectGender">Gender</InputLabel>
                <Select
                  labelId="selectGender"
                  id="selectGender"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                  style={{ borderRadius: "15px" }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="non-binary">Non-binary</MenuItem>
                </Select>
                {genderError && (
                  <div className="text-[#D32F2F] text-xs mt-[3px] ml-[14px]">
                    {genderError}
                  </div>
                )}
              </FormControl>

              {/* Weight + Height */}
              <Box
                sx={{
                  display: "flex",
                  padding: "0px",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                {/* Weight */}
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={weight}
                    id="weight"
                    label="Weight"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setWeight(e.target.value)}
                    error={!!weightError}
                    helperText={weightError}
                    InputProps={{
                      inputProps: { min: 0, max: 10 },
                      sx: { borderRadius: 3 },
                    }}
                  />
                </Box>
                {/* Height */}
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={height}
                    id="height"
                    label="Height"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setHeight(e.target.value)}
                    error={!!heightError}
                    helperText={heightError}
                    InputProps={{ sx: { borderRadius: 3 } }}
                  />
                </Box>
              </Box>
              {/* Button */}
              <Button
                onClick={handleClick}
                variant="contained"
                className="bg-[#66d2e8] hover:bg-[#39bad4] rounded-xl p-[12px] mt-4 my-8 border"
              >
                Contained
              </Button>
            </Box>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
}

export default EditProfile;
