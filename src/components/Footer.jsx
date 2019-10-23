// Autogenerated using npm run gen Footer

import styled from 'styled-components';

function Footer() {
  const toppsCopyright =
    'The Topps Company, Inc. has sole ownership of the names, logo, artwork, marks, photographs, sounds, audio, video and/or any proprietary material used in connection with the game Shadowrun. The Topps Company, Inc. has granted permission to cyber-ex.net to use such names, logos, artwork, marks and/or any proprietary materials for promotional and informational purposes on its website but does not endorse, and is not affiliated with cyber-ex.net in any official capacity whatsoever.';
  return (
    <Main className="container bg-secondary text-white">{toppsCopyright}</Main>
  );
}

export default Footer;

const Main = styled.p`
  font-family: Open Sans;
  padding-top: 10px;
`;
