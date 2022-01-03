import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';

const StyledBurtoonback = styled.button`
  color: ${AppTheme.colors.rosee};
  border-radius: 1rem;
  background: #092a55;
  box-shadow: 20px 20px 48px #061c39, -20px -20px 48px #0c3871;
  padding: 1rem;
  margin: 0;
  border: none;
  color:#fff;
    
`;

const Buttonback = () => {
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

  return <StyledBurtoonback onClick={HandleBack}>back</StyledBurtoonback>;
};

export default Buttonback;
