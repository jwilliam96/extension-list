import CardList from './components/ui/CardList'
import SvgLogo from './components/svg/svg-logo'
import UseToggle from './hooks/useToggle'
import UseLists from './hooks/useLists'
import options from "./helpers/lists"

import './App.css'
import UseFetch from './hooks/useFetch'

function App() {

  const [dark, setDark] = UseToggle(true)
  const [listActive, handleList] = UseLists()

  const { filterList, updateListState, removeItem } = UseFetch(listActive)

  return (
    <div className={`body ${dark && "dark"}`}>
      <div className='main'>
        <header className='header'>
          <SvgLogo dark={dark} />

          <div className='button-dark' onClick={setDark}>
            {
              dark ?
                <img src="/images/icon-sun.svg" alt="icon sun" />
                :
                <img src="/images/icon-moon.svg" alt="icon sun" />
            }
          </div>
        </header>

        <div className='container-list'>
          <h1>Extensions List</h1>

          <ul className='list'>
            {
              options.map((option) => (
                <li
                  key={option}
                  className={`list-item ${listActive === option && "active"}`}
                  onClick={() => handleList(option)}>
                  {option}
                </li>
              ))
            }
          </ul>
        </div>


        {/* CARD  */}
        <div className='containers-cards'>
          {filterList.map((list) => (
            <CardList
              key={list.name}
              props={list}
              onToggle={updateListState}
              onRemove={removeItem}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
