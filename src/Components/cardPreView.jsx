import styled from 'styled-components';
import dblog from '../../assets/dblog.svg';
import { AppTheme } from '../mainStyled';
import { URI_BACKEND } from '../Utils/SchemasQueries';
const StyeleCardPreView = styled.section`
  border-radius: 1rem;
  background: #6183ab;
  box-shadow: inset 20px 20px 12px #526f91, inset -20px -20px 12px #7097c5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 1rem 0.3rem;
  img {
    width: 80%;
    border-radius: 1rem;
    border: 1px solid ${AppTheme.colors.black};
    object-fit: cover;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    color: ${AppTheme.colors.green};
    font-weight: bold;
  }
  p {
    color: ${AppTheme.colors.black};
    font-weight: bold;
  }
`;

const CardPreView = ({ title, imgSrc, description }) => {
  return (
    <StyeleCardPreView>
      <img src={imgSrc} alt={description} />
      <h1>{title} </h1>
      <p>
        {description.length > 50
          ? description.substring(0, 50) + '...'
          : description}
      </p>
    </StyeleCardPreView>
  );
};

export default CardPreView;
