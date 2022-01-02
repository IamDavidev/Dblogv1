import styled from 'styled-components';
import dblog from '../../assets/dblog.svg';
import { AppTheme } from '../mainStyled';
const StyeleCardPreView = styled.section`
  border-radius: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 191, 255, 0.075);
  box-shadow: rgb(0 0 0 / 30%) 2px 8px 8px;
  border: 0px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
  border-right: 0px rgba(40, 40, 40, 0.35) solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 150px;
    object-fit: cover;
  }
`;

const CardPreView = (props) => {
  return (
    <StyeleCardPreView>
      <img src={dblog} alt="" />
      <h1>prew</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas
        corporis explicabo velit eius aspernatur mollitia distinctio aut iusto,
        veniam, vitae magnam excepturi consequatur sit minima, nostrum quo
        adipisci. Debitis.
      </p>
    </StyeleCardPreView>
  );
};

export default CardPreView;
