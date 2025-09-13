import CardList from './components/ui/CardList'
import SvgLogo from './components/svg/svg-logo'
import UseToggle from './hooks/useToggle'
import UseLists from './hooks/useLists'
import lists from "./helpers/lists"

import './App.css'

function App() {

  const [dark, setDark] = UseToggle()
  const [state, setState] = UseToggle()
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


      {/* CARD  */}
      <CardList state={state} setState={setState} />
    </div>
  )
}

export default App
