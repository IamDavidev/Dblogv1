import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';

const StyledBurtoonback = styled.button`
  color: ${AppTheme.colors.aqua};
  background: transparent;
  border:none;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 1px solid ${AppTheme.colors.rosee};
  padding: 1rem;
  margin: 0;
`;

const Buttonback = () => {
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

  return <StyledBurtoonback onClick={HandleBack}>back</StyledBurtoonback>;
};

export default Buttonback;
