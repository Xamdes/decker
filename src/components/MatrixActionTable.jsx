// Autogenerated using npm run gen MatrixActionTable
/*
 * Copy to other files
 * import MatrixActionTable from './MatrixActionTable';
 * <MatrixActionTable/>
 */
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function MatrixActionTable(props) {
  const columns = [
    {
      Header: 'Matrix Action',
      accessor: 'name',
      width: 200,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Type',
      accessor: 'actionType',
      width: 300,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Limit',
      accessor: 'limit',
      width: 150,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Offense Value',
      accessor: 'offenseCalc',
      width: 150,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Defense Value',
      accessor: 'defenseCalc',
      width: 150,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Offense Roll',
      accessor: 'offenseNames',
      width: 300,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Defense Roll',
      accessor: 'defenseNames',
      width: 300,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Marks',
      accessor: 'marks',
      width: 150,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Description',
      accessor: 'desc',
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
    {
      Header: 'Source',
      accessor: 'source',
      width: 150,
      style: { width: 'auto', height: 'auto', 'white-space': 'unset' },
    },
  ];

  return (
    <Main className="">
      <ReactTable
        className="container-fluid bg-info -striped -highlight"
        data={props.actions}
        columns={columns}
        resizable={false}
        filterable={true}
        style={{ width: 'auto', height: 'auto', 'word-wrap': 'normal' }}
      />
    </Main>
  );
}

MatrixActionTable.propTypes = {
  actions: PropTypes.array,
};

export default MatrixActionTable;

const Main = styled.div`
  font-family: Courier New;
  font-size: 1em;
`;
