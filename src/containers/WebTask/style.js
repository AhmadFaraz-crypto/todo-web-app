import styled from 'styled-components';

import CheckMark from '../../assets/Checkmark.svg';

const Wrapper = styled.div`
    min-height: 100vh;
    padding-left: 343px;
    padding-top: 50px;
    position: relative;

    .reminder-noti {
        margin-right: 30px;
        position: absolute;
        right: 0;
    }

    .add-new-task {
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #575767;
        cursor: pointer;
    }

    .submit-resume {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #575767;
        margin: 4px 0px;
        padding-left: 16px;
    }

    .date {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin: 4px 0px;
        color: #B9B9BE;
        padding-left: 5px;
    }

    .form-check-input {
        background: linear-gradient(180deg, #FCFCFC 0%, #F8F8F8 100%);
        background-color: linear-gradient(180deg, #FCFCFC 0%, #F8F8F8 100%);
        border: 2px solid #DADADA;
        box-sizing: border-box;
        border-radius: 6px;
        width: 24px;
        height: 24px;
    }

    .form-check-input:checked[type=checkbox] {
        background-image: url(${CheckMark});
        background-repeat: no-repeat;
        background-position: center;
    }

    .form-check-input:focus {
        box-shadow: unset;
    }

    .completed {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #B9B9BE;
        margin: 4px 0px;
        padding-left: 16px;
    }
`;

export default Wrapper;