import styled from 'styled-components';

const variantsBg = {
  primary: '#000000',
  secondary: '#000000',
  transparent: 'transparent'
};

const variantColors = {
  primary: '#fff',
  secondary: '#fff',
  transparent: '#000'
};

const fontSizes = {
  rg: '16px',
  sm: '18px'
};

const lineHeights = {
  rg: '16px',
  sm: '22px'
};

const paddings = {
  rg: '16px 148px',
  sm: '17px 123px 17px 47px'
};

const Button = styled.button`
  display: ${props => (props.icon || props.loading ? 'flex' : 'block')};
  align-items: center;
  font-weight: 600;
  color: ${props => variantColors[props.variant]};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${props => variantsBg[props.variant]};
  font-family: 'Poppins', sans-serif;
  font-size: ${props => fontSizes[props.size]};
  line-height: ${props => lineHeights[props.size]};
  border-radius: 100px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: ${props => paddings[props.size]};
  outline: none;
  border: none;
  .sub {
    font: normal normal 300 10px/13px Montserrat;
  }
`;

export default Button;