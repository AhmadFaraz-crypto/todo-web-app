import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
    .title {
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        font-style: normal;
        text-align: center;
        padding-bottom: 51px;
    }

    .input-field {
        position: relative;
        input {
            padding: 16px;
            min-width: 343px;
            background: #F6F6F6;
            border: 1px solid #E8E8E8;
            box-sizing: border-box;
            border-radius: 8px;
            :focus {
                outline: none;
            }
        }
        span {
            position: absolute;
            right: 5%;
            top: 32%;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            cursor: pointer;
        }
        p 
        {
            color: #bf1650;
        }
          
        p::before {
        display: inline;
        content: "⚠ ";
        }
    }
`;

export default Wrapper;