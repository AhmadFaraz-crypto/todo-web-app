import React from "react";

// components
import Button from "../Button";
import NoteIcon from "../../assets/components/note";
import LocatonIcon from "../../assets/components/location";
import Logout from "../../assets/logout.svg";

// style
import Wrapper from "./style";

function SideAppBar({ history }) {
  const sideApp = [
    {
      title: "Task",
      icon: <NoteIcon color={"/web-task" === history.location.pathname ? "white" : "black"} />,
      action: () => window.location.replace("/web-task"),
      location: "/web-task",
    },
    {
      title: "Location",
      icon: <LocatonIcon color={"/web-location" === history.location.pathname ? "white" : "black"} />,
      action: () => window.location.replace("/web-location"),
      location: "/web-location",
    },
  ];

  return (
    <Wrapper className="app-bar-width">
      <div className="pt-3 d-flex flex-column h-100">
        {sideApp.map((item, index) => (
          <Button
            variant={
              item.location === history.location.pathname
                ? "secondary"
                : "transparent"
            }
            size="sm"
            className="d-flex mt-4 side-bar-btn"
            key={index}
            onClick={() => item.action()}
          >
            <span className="text">{item.icon}</span> {item.title}
          </Button>
        ))}
        <Button
          variant="transparent"
          size="sm"
          className="d-flex mt-auto mb-5 side-bar-btn"
          onClick={() => window.location.replace('/')}
        >
          <span className="text">
            <img src={Logout} alt="logout" />
          </span>{" "}
          Logout
        </Button>
      </div>
    </Wrapper>
  );
}

export default SideAppBar;
