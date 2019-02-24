// Autogenerated using npm run gen Stat
/*
 * Copy to other files
 * import Stat from './Stat';
 * <Stat/>
 */
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function Stat() {
  return (
    <Main>
      <CardStyle className="card">
        <div className="card-body">
          <TitleHeader className="card-title">Attack</TitleHeader>
          <div className="card-text">
            <Input
              name="attack"
              type="number"
              value={this.props.cyberdeckData.attributes.attack}
              onChange={this.handleAttributesChange}
            />
          </div>
        </div>
      </CardStyle>
    </Main>
  );
}

Stat.propTypes = {
  //  [variable-name]: PropTypes.[type],
};

export default Stat;

const Main = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: normal;
  font-size: 1em;
`;

const Input = styled.input`
  font-family: Open Sans;
  color: black;
  font-size: 1em;
  width: 100px;
  text-align: center;
`;

const CardStyle = styled.div`
  width: 250px;
  font-size: 0.8em;
  text-align: center;
`;

const TitleHeader = styled.div`
  font-size: 1.5em;
`;
