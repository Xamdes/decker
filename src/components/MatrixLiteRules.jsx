// Autogenerated using npm run gen MatrixLiteRules
/*
* Copy to other files
* import MatrixLiteRules from './MatrixLiteRules';
* <MatrixLiteRules/>
*/
import styled from 'styled-components';
import Rules from './Rules';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function MatrixLiteRules(){
  return (
    <Main>
      <Rules></Rules>
      <TextSection className="bg-info">
        <p>Matrix Lite Rules by <a href="https://www.reddit.com/user/LeVentNoir/" className="link-dark">LaVentNoir</a> - <a href="https://www.reddit.com/r/Shadowrun/comments/7nhmcr/lite_matrix_rules/" className="link-dark">Source Link</a></p>
        <p>The Following rules make hacking a device a one roll thing, defended systems much more about the defenders than raw hardware, remote hacking much harder, and makes Watch Dogs style jumping from device to device possible.</p>
        <p>There are edge cases, such as technomancers, that need cleaning up, but the basic framework is here for you to use. As always GM discretion.</p>
        <p>System refers to Device or Host and Hosts, due to their skyborne nature, are always visible..</p>
        <p>The core is that there are no marks and two kinds of systems.</p>
        <p>Passive systems have no active user, such as spiders or IC. Taking control of a passive system requires a threshold test.</p>
        <p>Actively defended systems that require overcoming the guardians to then exploit a now passive system.</p>
        <p><b>Wireless:</b> Apart from specialized devices such as throwbacks, datachips or Secure Data Vaults, all devices are both wirelessly active, and unable to function well without it, preventing it from being disabled.</p>
        <p><b>Matrix Search:</b> A matrix search searches one grid for information. Players may state they are searching the Big 10 grids before a search, increasing the amount of time it takes by a factor of ten, but avoiding any chance that the information they want is on the wrong grid. Information should be stored on a relevant grid, and players should be able to guess or learn of this beforehand. Times and threshold as in the books. Matrix search should be hard to get good, active information out of, and instead act as pointers to more specialized sources, be they people, communities, hosts, etc.</p>
        <p><b>Matrix Actions:</b> You can take the following matrix actions as a User, while in a system you do not Own. Edit File, Exit Host, Hide. If you Own, or have Exploited a device, you can then, as a free action and without a test: Change Icon, Send Messages, Format, Reboot, Spoof Command, Snoop, Trace Icon, Jam Signals, and Jump into Device. Even as an Owner, you must make tests to Protect Files, Crack Files, Set Data Bombs and Disarm Data bombs. Non-listed actions cannot be taken.</p>
        <p><b>Matrix Perception:</b> Icons are visible in AR if you have line of sight to the device. Silent running icons within line of sight require a Matrix perception roll which reveals all silently running icons the test beats. Matrix perception is always static threshold: Computer + Intuition [Data Processing] (Sleaze). In VR, Line of Sight is traced from the Device the player is using to access the Matrix. A player can change this origin point to any device they own or have currently exploited. This means that you can now daisy-chain your way through a facility.</p>
        <p><b>Exploiting Devices:</b> To Exploit a Passive System, you must make either of these two tests: Hacking + Logic [Sleaze] (Firewall) or Cybercombat + Intuition [Attack] (Firewall). Regardless of approach, a failed attempt is silent, and a successful one grants full access. Add the threshold of this test to your Overwatch each time you attempt it.</p>
        <p><b>Matrix Defenders:</b> Defended Systems have Spiders, IC, or active Users. The Hacker may attempt to subvert the defender or destroy the defender. This is done in initiative time. Code Injection is Hacking + Logic [Sleaze] vs Willpower + Firewall. Deal net hits as Matrix Damage. If the target is not aware of you (running silent / hidden), then you remain so. If the defender successfully spots you, you may not make any more Code Injection attacks as they know you are there. A Data Spike is as in SR5, but no extra damage for Marks. Once all defenders are dead / disrupted / bricked, the system may be exploited as if it were undefended. Add all hits and all defenders get added to overwatch.</p>
        <p><b>Cyberdecks:</b> Programs are annoying to track and hard to manage number bloat. Cyberdecks are assumed to be laptop sized hardware bundles with specialized processing units and programs for dedicated security attacks. All cyberdecks are F rated, as legitimate matrix security people use Terminals. Cyberdecks can run 1 Agent, which acts as a Blaster IC when the deck is being hacked. Cyberdecks require rebooting to set a new ASDF configuration.</p>
        <p><b>Overwatch and Convergence:</b> Whenever you make an Attack or Sleaze limited test, then you gain overwatch equal to the Threshold (if static threshold) or opposing Hits (if opposed). Once it hits 40, GOD simply crashes you. Fill your matrix condition monitor, take 12 Stun damage (resisted with BOD+WIL), and know your physical IRL location has been broadcast to security forces. There is no way to check your overwatch, and careful hackers will leave before it is too late.</p>
        <p><b>Hosts:</b> Hosts float in the sky of the VR and AR world, making them always visible from everywhere. It also makes them the only way to easily work and transfer files over distances longer than line of sight. When you can comm call someone from anywhere you have signal, to initiate a file transfer a longer than line of sight distances, you must use a host. Hosts are considered to have line of sight to every device slaved to them, and thus these devices are visible from within the host while no non slaved devices are otherwise visible. Hosts store semi secure data, and their defenders must be overcome before this data can be accessed. Hosts have IC running, a fixed number of instances and / or Spiders. Thus, you may have to defeat 2 IC and 1 Spider before you can steal the data. Hosts have ratings of between 1 and 6, and have ASDF of Rating, then Rating +1, Rating +2, Rating +3. Since these are thresholds and not dice pools, that is why they are limited. Consider allowing players to have a host for use in the game.</p>
        <p><b>IC:</b> IC comes in five kinds. Patrol IC only makes matrix perception checks. Alarm IC attacks with data spikes, but instead of dealing net hits to your matrix condition monitor, they increase your Overwatch by that amount. Blaster IC Uses data spikes, and attacks matrix condition monitor. Grey IC is Blaster IC, but also applies damage to your stun track. Black IC attacks all three tracks at once: Matrix condition, Stun condition and Physical condition, dealing damage to each equal to the net hits on the data spike. Black IC is very nasty, yes. A host will have several IC on standby, and once these standby IC are defeated, no more will be launched. The number of IC the host can have on standby is equal to its Data Processing.</p>
        <p><b>Secure Data Vaults:</b> For secure data storage, intermittently connected Data Vaults are used. These not constantly slaved to Hosts and are stored in secure facilities. Thus, they must be physically reached to be hacked. Dedicated Terminals may be set up for remote access with secure wired data links. Reaching a Terminal will allow you to hack into a Data Vault. Data Vaults run no IC, but still must be exploited, and have a Device Rating of 5.</p>
      </TextSection>
    </Main>
  );
}

/*
MatrixLiteRules.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default MatrixLiteRules;

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