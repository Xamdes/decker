/* Autogenerated using npm run gen Program
 *
 * Copy to other files
 * import Program from './Program';
 * <Program/>
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonOver = this.handleButtonOver.bind(this);
    this.handleButtonOut = this.handleButtonOut.bind(this);
    this.handleAddCountValue = this.handleAddCountValue.bind(this);
  }

  handleAddCountValue(value) {
    this.setState((state) => {
      state.count += value;
    });
  }

  handleButtonClick() {
    const program = this.props.program;
    console.log(program);
    const max = program.max;
    const increment = program.increment;
    const value = this.state.count >= max ? -max : increment;
    this.handleAddCountValue(value);
    const name = program.modify;
    console.log(name);
    console.log(value);
    this.props.onHandleConfigStats(
      name,
      this.props.cyberdeckData.attributes[name] + value
    );
  }

  handleButtonOver() {
    this.props.onHandleButtonHover(this.props.program.description);
  }

  handleButtonOut() {
    this.props.onHandleButtonHover('');
  }

  render() {
    const currentClass =
      this.state.count <= 0 ? 'btn btn-light' : 'btn btn-success';
    return (
      <Main classname="">
        <div>
          <button
            className={currentClass}
            onClick={this.handleButtonClick}
            onMouseOver={this.handleButtonOver}
            onMouseOut={this.handleButtonOut}>
            {this.props.program.name}
          </button>
        </div>
      </Main>
    );
  }
}

Program.propTypes = {
  //onHandleProgramChange: PropTypes.func,
  onHandleConfigStats: PropTypes.func,
  onHandleButtonHover: PropTypes.func,
  program: PropTypes.object,
  cyberdeckData: PropTypes.object,
};

export default Program;

const Main = styled.div`
  font-family: Open Sans;
  font-weight: normal;
  margin: 3px;
`;