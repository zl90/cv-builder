import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { positions } from "@mui/system";
import Divider from "@mui/material/Divider";
import { TextField, InputAdornment } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";
import uniqid from "uniqid";
import { blue } from "@mui/material/colors";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            display="flex"
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingBottom: "8px",
            }}
          >
            <Typography variant="h4" component="div">
              ZCV
            </Typography>
            <Typography variant="subtitle" component="div">
              Create your CV!
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <PersonalInfo></PersonalInfo>
        <Education></Education>
        <AddEducation></AddEducation>
        <WorkExperience></WorkExperience>
        <AddExperience></AddExperience>
        <CreateCV></CreateCV>
      </Box>
    );
  }
}

class PersonalInfo extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          Personal Information
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <TextField
              id="firstname"
              label="First Name"
              variant="outlined"
              sx={{ flex: 1 }}
              required
            />
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              sx={{ flex: 1 }}
              required
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              sx={{ flex: 1 }}
              required
            />
            <TextField
              id="phonenumber"
              label="Phone Number"
              variant="outlined"
              type="tel"
              value="+61"
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          Education
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "16px",
              flexDirection: "column",
            }}
          >
            <TextField
              id="qualification"
              label="Title of qualification"
              variant="outlined"
              required
            />
            <TextField
              id="organisation"
              label="Organisation/School"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <TextField
              id="dateFrom"
              label="From"
              type="date"
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              sx={{ flex: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="dateTo"
              label="To"
              type="date"
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              sx={{ flex: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Divider></Divider>
        </Box>
      </Box>
    );
  }
}

class AddEducation extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Button variant="contained" sx={{ width: "200px" }}>
          Add Education
        </Button>
      </Box>
    );
  }
}

class WorkExperience extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          Work Experience
        </Typography>
        <Divider></Divider>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "16px",
              flexDirection: "column",
            }}
          >
            <TextField
              id="occupationTitle"
              label="Title of occupation"
              variant="outlined"
              required
            />
            <TextField
              id="employer"
              label="Employer"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <TextField
              id="dateFrom"
              label="From"
              type="date"
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              sx={{ flex: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="dateTo"
              label="To"
              type="date"
              defaultValue={format(new Date(), "yyyy-MM-dd")}
              sx={{ flex: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Divider></Divider>
        </Box>
      </Box>
    );
  }
}

class AddExperience extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Button variant="contained" sx={{ width: "200px" }}>
          Add Work Experience
        </Button>
      </Box>
    );
  }
}

class CreateCV extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          Create the CV
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "200px", backgroundColor: "#3f51b5" }}
        >
          Preview
        </Button>
        <Typography variant="subtitle1" component="div">
          Complete all fields and continue!
        </Typography>
      </Box>
    );
  }
}

export default App;
