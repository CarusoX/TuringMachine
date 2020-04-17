import React from 'react';
import Machine from './Components/Machine/Machine';
import InputArea from './Components/InputArea';

function App(): React.ReactElement<typeof Machine> {
  return (
    <>
      <Machine />
      <InputArea />
    </>
  );
}

export default App;
