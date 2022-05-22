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
  constructor() {
    super();

    this.state = {
      personalInfo: { firstName: "", lastName: "", email: "", phoneNumber: "" },
      education: [
        {
          id: uniqid(),
          title: "",
          school: "",
          dateFrom: format(new Date(), "yyyy-MM-dd"),
          dateTo: format(new Date(), "yyyy-MM-dd"),
          key: "",
        },
      ],
      experience: [
        {
          id: uniqid(),
          title: "",
          employer: "",
          dateFrom: format(new Date(), "yyyy-MM-dd"),
          dateTo: format(new Date(), "yyyy-MM-dd"),
          key: "",
        },
      ],
    };

    this.updatePersonalInfoFirstName =
      this.updatePersonalInfoFirstName.bind(this);
    this.updatePersonalInfoLastName =
      this.updatePersonalInfoLastName.bind(this);
    this.updatePersonalInfoEmail = this.updatePersonalInfoEmail.bind(this);
    this.updatePersonalInfoPhoneNumber =
      this.updatePersonalInfoPhoneNumber.bind(this);

    this.updateEducationTitle = this.updateEducationTitle.bind(this);
    this.updateEducationSchool = this.updateEducationSchool.bind(this);
  }

  updatePersonalInfoFirstName = (newValue) => {
    this.setState({
      personalInfo: {
        firstName: newValue,
        lastName: this.state.personalInfo.lastName,
        email: this.state.personalInfo.email,
        phoneNumber: this.state.personalInfo.phoneNumber,
      },
    });
  };

  updatePersonalInfoLastName = (newValue) => {
    this.setState({
      personalInfo: {
        firstName: this.state.personalInfo.firstName,
        lastName: newValue,
        email: this.state.personalInfo.email,
        phoneNumber: this.state.personalInfo.phoneNumber,
      },
    });
  };

  updatePersonalInfoEmail = (newValue) => {
    this.setState({
      personalInfo: {
        firstName: this.state.personalInfo.firstName,
        lastName: this.state.personalInfo.lastName,
        email: newValue,
        phoneNumber: this.state.personalInfo.phoneNumber,
      },
    });
  };

  updatePersonalInfoPhoneNumber = (newValue) => {
    this.setState({
      personalInfo: {
        firstName: this.state.personalInfo.firstName,
        lastName: this.state.personalInfo.lastName,
        email: this.state.personalInfo.email,
        phoneNumber: newValue,
      },
    });
  };

  updateEducationTitle = (newValue, index) => {
    const newEducationArray = this.state.education.map((object, i) => {
      if (i === index) {
        return {
          title: newValue,
          school: object.school,
          dateFrom: object.dateFrom,
          dateTo: object.dateTo,
          key: object.id,
          id: object.id,
        };
      } else {
        return object;
      }
    });

    this.setState({
      education: newEducationArray,
    });
  };

  updateEducationSchool = (newValue, index) => {
    const newEducationArray = this.state.education.map((object, i) => {
      if (i === index) {
        return {
          title: object.title,
          school: newValue,
          dateFrom: object.dateFrom,
          dateTo: object.dateTo,
          key: object.id,
          id: object.id,
        };
      } else {
        return object;
      }
    });

    this.setState({
      education: newEducationArray,
    });
  };

  updateEducationDateFrom = (newValue, index) => {
    const newEducationArray = this.state.education.map((object, i) => {
      if (i === index) {
        return {
          title: object.title,
          school: object.school,
          dateFrom: newValue,
          dateTo: object.dateTo,
          key: object.id,
          id: object.id,
        };
      } else {
        return object;
      }
    });

    this.setState({
      education: newEducationArray,
    });
  };

  updateEducationDateTo = (newValue, index) => {
    const newEducationArray = this.state.education.map((object, i) => {
      if (i === index) {
        return {
          title: object.title,
          school: object.school,
          dateFrom: object.dateFrom,
          dateTo: newValue,
          key: object.id,
          id: object.id,
        };
      } else {
        return object;
      }
    });

    this.setState({
      education: newEducationArray,
    });
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <PersonalInfo
          state={this.state}
          updateFirstName={this.updatePersonalInfoFirstName}
          updateLastName={this.updatePersonalInfoLastName}
          updateEmail={this.updatePersonalInfoEmail}
          updatePhoneNumber={this.updatePersonalInfoPhoneNumber}
        ></PersonalInfo>
        {this.state.education.map((object, i) => {
          return (
            <Education
              state={this.state}
              updateTitle={this.updateEducationTitle}
              updateSchool={this.updateEducationSchool}
              updateDateFrom={this.updateEducationDateFrom}
              updateDateTo={this.updateEducationDateTo}
              index={i}
              key={object.id}
            ></Education>
          );
        })}
        <AddEducation state={this.state}></AddEducation>
        <WorkExperience state={this.state}></WorkExperience>
        <AddExperience state={this.state}></AddExperience>
        <CreateCV state={this.state}></CreateCV>
      </Box>
    );
  }
}

class PersonalInfo extends React.Component {
  handleUpdate = (event) => {
    switch (event.target.id) {
      case "firstname":
        this.props.updateFirstName(event.target.value);
        break;
      case "lastname":
        this.props.updateLastName(event.target.value);
        break;
      case "email":
        this.props.updateEmail(event.target.value);
        break;
      case "phonenumber":
        this.props.updatePhoneNumber(event.target.value);
        break;
      default:
        break;
    }
  };

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
              onChange={this.handleUpdate}
              required
            />
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              sx={{ flex: 1 }}
              onChange={this.handleUpdate}
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
              onChange={this.handleUpdate}
              required
            />
            <TextField
              id="phonenumber"
              label="Phone Number"
              variant="outlined"
              type="tel"
              onChange={this.handleUpdate}
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

class Education extends React.Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate = (event) => {
    switch (event.target.id) {
      default:
        break;
      case "qualification":
        this.props.updateTitle(event.target.value, this.props.index);
        break;
      case "school":
        this.props.updateSchool(event.target.value, this.props.index);
        break;
      case "dateFrom":
        this.props.updateDateFrom(event.target.value, this.props.index);
        break;
      case "dateTo":
        this.props.updateDateTo(event.target.value, this.props.index);
        break;
    }
  };

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
              onChange={this.handleUpdate}
              required
            />
            <TextField
              id="school"
              label="Organisation/School"
              variant="outlined"
              onChange={this.handleUpdate}
              required
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
            <TextField
              id="dateFrom"
              label="From"
              type="date"
              defaultValue={
                this.props.state.education[this.props.index].dateFrom
              }
              onChange={this.handleUpdate}
              sx={{ flex: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="dateTo"
              label="To"
              type="date"
              defaultValue={this.props.state.education[this.props.index].dateTo}
              onChange={this.handleUpdate}
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
        <Button variant="contained" sx={{ width: "150px" }}>
          Add
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
        <Button variant="contained" sx={{ width: "150px" }}>
          Add
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
          Create your CV
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "150px", backgroundColor: "#3f51b5" }}
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