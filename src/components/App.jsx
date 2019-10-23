import Programs from './Programs';
import Error404 from './Error404';
import Header from './Header';
import Stats from './Stats';
import MatrixActions from './MatrixActions';
import styled from 'styled-components';
import Footer from './Footer';
// import ShadowrunStore from './ShadowrunStore';
import { Switch, Route } from 'react-router-dom';

function App() {
  const title = 'Shadowrun 5e Decker Edition';
  return (
    <Main className="container-fluid bg-dark">
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <Title className="jumbotron">{title}</Title>
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path="/cyberdeck"
          render={() => (
            <div>
              <div className="d-flex flex-wrap justify-content-center">
                <Stats className="" />
                <Programs className="" />
              </div>
              <div>
                <MatrixActions />
              </div>
            </div>
          )}
        />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  font-family: Open Sans;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 800;
`;

const HeaderStyle = styled.div`
  font-size: 1.5em;
  text-align: center;
`;
