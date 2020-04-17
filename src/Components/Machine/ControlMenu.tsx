import React from 'react';
import { Header } from 'semantic-ui-react';

function MachineControlMenu(): React.ReactElement<typeof Header> {
  return <Header as="h2"> This will be the control menu</Header>;
}

export default MachineControlMenu;
