import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';

const App = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Demo library="mui5" />
      </StyledEngineProvider>
      <Demo library="mui4" />
    </div>
  );
};

export default App;
