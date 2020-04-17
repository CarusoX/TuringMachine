import React from 'react';
import { Header } from 'semantic-ui-react';

function MachineTitle(): React.ReactElement<typeof Header> {
  return <Header as="h1">Example Turing Machine</Header>;
}

export default MachineTitle;
