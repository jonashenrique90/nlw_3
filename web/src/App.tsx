import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'
import './styles/global.css';
import Routes from './routes';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import ThemeSwitcher from './components/ThemeSwitcher'

const App: React.FC = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

	const toggleTheme = (): void => {
	  setTheme(theme.title === 'light' ? dark : light)
	}

  return (
	<ThemeProvider theme={theme}>
    <Routes></Routes>
	<ThemeSwitcher toggleTheme={toggleTheme} />
	</ThemeProvider>
  );
}

export default App
