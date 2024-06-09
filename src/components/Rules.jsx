// Autogenerated using npm run gen Rules
/*
* Copy to other files
* import Rules from './Rules';
* <Rules/>
*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function Rules(){
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
      {createLink('Matrix Lite Rules', '/rules/matrixliterules')}
      {space}
      {createLink('Rigger Rules', '/rules/riggerrules')}
    </Main>
  );
}

/*
Rules.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default Rules;

const Main = styled.div`
font-family: Open Sans;
 font-size: 1.5em;
 font-weight: 900;
 text-align: center;
`;
