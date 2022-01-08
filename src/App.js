import './App.css';
import Todo from './Todo/Todo'

import useLocalStorage from 'use-local-storage'

function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)

    }

    return (
        <div className="App" data-theme={theme}>
            {/*<button onClick= {switchTheme}>*/}
            {/*    Switch to{theme === "light" ? "Dark" : "Light"}*/}
            {/*</button>*/}
            <Todo/>
        </div>
    );
}

export default App;
