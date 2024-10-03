import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const App = () => (
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
);

export default App;
