#!/usr/bin/env bash
PREPEND=${2:-false}

cd ./src/components

echo "// Autogenerated using npm run gen $1
/*
* Copy to other files
* import $1 from './$1';
* <$1/>
*/
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function $1(){
  return (
    <Main>
      <h1>$1 Component Created Successfully</h1>
    </Main>
  );
}

/*
$1.propTypes = {
  //  [variable-name]: PropTypes.[type],
};
*/

export default $1;

const Main = styled.div\`
background-color: white;
font-family: Courier New;
color: black;
font-weight: normal;
\`;

" > "$1.jsx"

if [ $PREPEND != false ];
then
  echo "import $1 from './$1';" | cat - ./$PREPEND.jsx > temp && mv temp ./$PREPEND.jsx
fi


