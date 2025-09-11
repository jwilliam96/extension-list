import './App.css'
import SvgLogo from './components/svg/svg-logo'
import UseToggleDark from './hooks/useToggleDark'
import lists from "./helpers/lists"
import UseLists from './hooks/useLists'

function App() {

  const [dark, setDark] = UseToggleDark()
  const [listActive, handleList] = UseLists()

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

      <div className='container-list'>
        <h1>Extensions List</h1>

        <ul className='list'>
          {
            lists.map((list) => (
              <li
                key={list}
                className={`list-item ${listActive === list && "active"}`}
                onClick={() => handleList(list)}>
                {list}
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default App
