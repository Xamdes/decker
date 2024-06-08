import Skills from './Skills';
import Character from './Character';
import Matrix from './Matrix';
import MatrixLiteRules from './MatrixLiteRules';
import Error404 from './Error404';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import shadowrunLogo from '../data/sr5_publicity_kit/sr5_logo_full.png';

function App() {
  const title = '5e Fansite';
  return (
    <Main className="container-fluid bg-dark">
      <Title className="jumbotron bg-light">
        <img src={shadowrunLogo} alt="Shadowrun Logo"></img>
        <span> </span>
        {title}
      </Title>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/matrix" component={Matrix} />
        <Route exact path="/character" component={Character} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/literules" component={MatrixLiteRules} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  font-family: Open Sans;
  height: 100vh;
  overflow: scroll;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  line-height: 1.4;
  font-size: 3em;
  img {
    height: 2em;
    vertical-align: bottom;
  }
`;
