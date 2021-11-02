/**
 * LoginPage
 *
 */

import React, { useState, useRef } from "react";

// components
import Button from "../../components/Button";
import Reminder from "../../components/Reminder";
import { FormCheck, Modal } from "react-bootstrap";

import Clock from "../../assets/clock.png";
import SummaryIcon from "../../assets/summary.svg";
import DescriptionIcon from "../../assets/description.svg";
import TimmerIcon from "../../assets/timmer.svg";

// style
import Wrapper from "./style";

// constants

const inCompleteData = [
  {
    text: "Submit my resume",
    time: "Today, 17.00",
  },
  {
    text: "Submit my resume",
    time: "Today, 17.00",
  },
  {
    text: "Submit my resume",
    time: "Today, 17.00",
  },
  {
    text: "Submit my resume",
    time: "Today, 17.00",
  },
  {
    text: "Submit my resume",
    time: "Today, 17.00",
  },
];

const WebTask = () => {
  const dateTime = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderNewTaskModal = () => (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="modal-container"
    >
      <Modal.Body className="p-5">
        <h3 className="modal-title">New Task</h3>
        <div className="form-data">
          <div className="summary">
            <img
              src={SummaryIcon}
              alt="summary"
              width="20"
              height="20"
              className="summary-icon"
            />
            <input placeholder="Summary" />
          </div>
          <div className="description">
            <img
              src={DescriptionIcon}
              alt="dexcription"
              width="20"
              height="18"
              className="description-icon"
            />
            <textarea placeholder="Description" />
          </div>
          <div className="summary">
            <img
              src={TimmerIcon}
              alt="timmer"
              width="20"
              height="20"
              className="summary-icon"
            />
            <input ref={dateTime} placeholder="Due Date" type="text" />
          </div>
          <div className="w-100">
            <Button className="mt-5 d-flex btn" onClick={handleClose}>
              Login
            </Button>
            <Button
              variant="transparent"
              className="mt-2 d-flex btn"
              onClick={handleClose}
            >
              cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );

  return (
    <Wrapper>
      <div className="d-flex justify-content-end reminder-noti">
        <Reminder />
      </div>
      <p className="add-new-task" onClick={handleShow}>
        + Add new task
      </p>
      <p className="pt-3 pl-2 add-new-task">Incomplete</p>
      {inCompleteData.map((e, index) => (
        <>
          <div key={index} className="d-flex">
            <FormCheck />
            <p className="mb-0 submit-resume">{e.text}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src={Clock} alt="clock" width="16" height="16" />
            <p className="date">{e.time}</p>
          </div>
        </>
      ))}
      <p className="pt-3 pl-2 add-new-task">Completed</p>
      {inCompleteData.map((e, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <FormCheck />
          <p className="mb-0 completed">{e.text}</p>
        </div>
      ))}
      {renderNewTaskModal()}
    </Wrapper>
  );
};

export default WebTask;
