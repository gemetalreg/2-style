import Header from './header/Header'
import Paragraph from './paragraph/Paragraph'
import Button from './button/Button' 
import Search from './search/Search'
import './App.css'
import SearchFilmLine from './SearchFilmLine/SearchFilmLine'
import Cards from './Cards/Cards'

function App() {

  return (
    <>
    <Header />
    <Paragraph />

    <SearchFilmLine>
        <Search />
        <Button />
    </SearchFilmLine>
    
    <Cards/>

    </>
  )
}

export default App
