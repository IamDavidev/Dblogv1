import styled from 'styled-components';
import dblog from '../../assets/dblog.svg';
import { AppTheme } from '../mainStyled';
import { URI_BACKEND } from '../Utils/SchemasQueries';
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
  color:#fff;
  margin:1rem  .3rem;
  img {
    width: 80%;
    border-radius: 1rem;
    border: 1px solid ${AppTheme.colors.black};
    object-fit: cover;
  }
h1{
  text-align:center;
  text-transform:uppercase;
  padding:0;
  margin:.3rem;
  color:${AppTheme.colors.green};
}
`;

const CardPreView = ({title,imgSrc,description}) => {
  console.log(description);
  return (
    <StyeleCardPreView>
    <img src={imgSrc} alt={description} />
      <h1>{title} </h1>
      <p>
        {
          description.length > 50
            ? description.substring(0, 100) + '...'
            : description
        }
      </p>
    </StyeleCardPreView>
  );
};

export default CardPreView;
