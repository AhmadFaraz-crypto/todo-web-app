import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px 0px 0px 0px;
    max-width: 360px;

    .reminder-text {
        padding-right: 37px;
        padding-left: 18px;
        padding-bottom: 22px;

        .resume {
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
        }

        .description {
            font-size: 16px;
            line-height: 19px;
            color: #575767;
        }
    }

    .reminder-icon {
        margin-right: 17px;
        padding-bottom: 22px;
    }

    .footer {
        display: flex;
        justify-content: end;
        background: #F7F5F5;
        border-radius: 0px 0px 10px 10px;
        padding: 9px 0px;

        .skip {
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            padding-right: 21px;
            cursor: pointer;
        }

        .remind-me-later {
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            padding-right: 17px;
            cursor: pointer;
        }
    }
`;

export default Wrapper;