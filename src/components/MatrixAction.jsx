// Autogenerated using npm run gen MatrixAction
/*
 * Copy to other files
 * import MatrixAction from './MatrixAction';
 * <MatrixAction/>
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function MatrixAction(props) {
  const action = props.values;
  return (
    <Main>
      <div className="card">
        <h5 className="card-header d-flex justify-content-center">
          {action.name}
        </h5>
        <div className="card-body">
          <h6 className="card-title">{action.actionType}</h6>
          <p className="card-text">
            Marks: {action.marks}
            <br />
            Attack: {action.offenseNames} <br />[{action.limit}]
            <br /> Value: {action.offenseCalc} [{action.offenseLimit}]
            <br />
            Defence: {action.defenseNames}
            <br /> Value: {action.defenseCalc}
            <br />
            {action.desc}
          </p>
        </div>
        <div className="card-footer text-muted">{action.source}</div>
      </div>
    </Main>
  );
}

MatrixAction.propTypes = {
  values: PropTypes.object,
};

export default MatrixAction;

const Main = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: normal;
`;
