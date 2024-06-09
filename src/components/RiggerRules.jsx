// Autogenerated using npm run gen RiggerRules
/*
* Copy to other files
* import RiggerRules from './RiggerRules';
* <RiggerRules/>
*/
import styled from 'styled-components';
import Rules from './Rules';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function RiggerRules(){
  return (
    <Main >
      <Rules></Rules>
      <TextSection className="bg-info">
        <p>Jumping in to a vehicle or device requires the following: A Control Rig, Ownership or 3 marks for the vehicle/drone, and the vahicle/drone has a rigger interface</p>
        <p>Jumping in is a Complex Action if in AR or a Simple Actiuon if you are in VR</p>
        <p>If you are using a direct connection and already plugged into the Vehicle or RCC then you can jump directly via a Simple Action.</p>
        <p>Vehicle actions are considered matrix actions while jumped in, so any bonuses to matrix actions are also bonuses to Vehicle Control Tests, Gunnery Tests, and Sensor Tests.</p>
        <p>Biofeedback is resisted with (Willpower+Firewall) and the rigger is resisting half the damage, rounded up, done to the Vehicle/Drone.</p>
        <p>Matrix damage is done to whatever device is used when making the jump. So if commlink is used then that is what takes the damage. If dierectly connected to a vehicle then the vehicle takes matrix damage.</p>
        <p>Cold Sim VR Jumped In:
          <ul>
            <li>Biofeedback is Stun</li>
            <li>Initiative: (Data Processing + Intuition + 3d6)</li>
            <li>+2 to Handling Limit</li>
            <li>Control Rig Rating is added to the limts for Vehicles/Drones: (Sensor, Speed, Handling, and Accuracy for mounted weapons)</li>
            <li>Control Rig adds extra device to Vehicle Skill Tests based on its rating that is Rating 2 gives +2d6 dice </li>
            <li>Control Rig Rating reduces the Threshold for Vehicle Tests to a minimum of 1</li>
            <li>Treat vehicle actions as Matrix actions: (Vehicle Control Tests, Gunnery Tests, and Sensor Tests)</li>
            <li>For example shooting a mounted weapon would be the following: Gunnery + Logic + Control Rig Rating [Accuracy + Control Rig Rating]</li>
          </ul>
        </p>
        <p>Hot Sim VR Jumped In:
          <ul>
            <li>Biofeedback is Physical</li>
            <li>Initiative: (Data Processing + Intuition + 4d6)</li>
            <li>+2 to Handling Limit</li>
            <li>Control Rig Rating is added to the limts for Vehicles/Drones: (Sensor, Speed, Handling, and Accuracy for mounted weapons)</li>
            <li>Control Rig adds extra device to Vehicle Skill Tests based on its rating that is Rating 2 gives +2d6 dice </li>
            <li>Control Rig Rating reduces the Threshold for Vehicle Tests to a minimum of 1</li>
            <li>Treat vehicle actions as Matrix actions: (Vehicle Control Tests, Gunnery Tests, and Sensor Tests)</li>
            <li>+2 dice on all Matrix actions: (Normal Bonus for Hot Sim)</li>
            <li>For example shooting a mounted weapon would be the following: Gunnery + Logic + Control Rig Rating + 2 Hot Sim Bonus [Accuracy + Control Rig Rating]</li>
          </ul>
        </p>
      </TextSection>
    </Main>
  );
}

/*
RiggerRules.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default RiggerRules;

const Main = styled.div`
font-family: Open Sans;
font-weight: normal;
`;

const TextSection = styled.div`
font-family: Open Sans;
font-weight: normal;
font-size: 1.2em;
padding: 20px;
`;