import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  // eslint-disable-next-line react/no-multi-comp
  const createLink = (name, linkName) => {
    return (
      <Link className="text-info" to={linkName}>
        {name}
      </Link>
    );
  };
  const space = <span className="text-white"> / </span>;
  return (
    <Main className="bg-black text-info">
      {createLink('Home', '/')}
      {space}
      {createLink('Character', '/character')}
      {space}
      {createLink('Skills', '/skills')}
      {space}
      {createLink('Matrix', '/matrix')}
    </Main>
  );
}

export default Header;

const Main = styled.div`
  font-family: Open Sans;
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
`;
