import './App.css'
import SvgLogo from './components/svg/svg-logo'
import ToggleDark from './hooks/toggleDark'

function App() {

  const [dark, setDark] = ToggleDark()

  return (
    <div className={`body ${dark && "dark"}`}>
      <header className='header'>
        <SvgLogo dark={dark} />

        <div className='button-dark' onClick={setDark}>
          {
            dark ?
              <img src="/public/images/icon-sun.svg" alt="icon sun" />
              :
              <img src="/public/images/icon-moon.svg" alt="icon sun" />
          }
        </div>
      </header>

    </div>
  )
}

export default App
