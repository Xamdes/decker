// Autogenerated using npm run gen Header
/*
 * Copy to other files
 * import Header from './Header';
 * <Header/>
 */
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Main>
      <Link to="/">dev</Link>
      <span>/</span>
      <Link to="/cyberdeck">cyberdeck</Link>
    </Main>
  );
}

/*
Header.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default Header;

const Main = styled.div`
  font-family: Courier New;
  color: lightgrey;
  font-weight: 600;
`;
