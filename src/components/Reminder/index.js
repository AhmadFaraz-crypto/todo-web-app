import React from 'react';

// style
import Wrapper from './style';

import ReminderIcon from '../../assets/reminder.svg';

const Reminder = () => {

    return (
        <Wrapper>
            <div className="d-flex justify-content-between align-items-center">
                <div className="reminder-text">
                <p className="mb-0 resume">Submit my resume</p>
                <span className="description">Send my resume to DigitalTolk</span>
                </div>
                <img src={ReminderIcon} alt="reminder" className="reminder-icon" />
            </div>
            <div className="footer">
                    <p className="mb-0 skip">Skip</p>
                    <p className="mb-0 remind-me-later">Remind me later</p>
                </div>
        </Wrapper>
    );

}

export default Reminder;