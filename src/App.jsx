import Header from './header/Header'
import Paragraph from './paragraph/Paragraph'
import Button from './button/Button' 
import Search from './search/Search'
import './App.css'
import SearchFilmLine from './SearchFilmLine/SearchFilmLine'
import Cards from './Cards/Cards'
import InputField from './InputField/InputField';
import { useState, useRef } from 'react'

function App() {
  const [profiles, setProfiles] = useState(() => {
    const saved = localStorage.getItem('profiles');
    return saved ? JSON.parse(saved) : [];
  });
  const nameRef = useRef(null);

  const handleLogin = () => {
    const name = nameRef.current.value.trim();
    if (!name) return;

    const existingProfile = profiles.find(p => p.name === name);
    let newProfiles;

    if (existingProfile) {
      // Обновляем статус входа
      newProfiles = profiles.map(p =>
        p.name === name ? { ...p, isLogined: true } : p
      );
    } else {
      // Создаем новый профиль
      newProfiles = [...profiles, { name, isLogined: true }];
    }

    setProfiles(newProfiles);
    localStorage.setItem('profiles', JSON.stringify(newProfiles));
    nameRef.current.value = null;
  };

  const handleLogout = (name) => {
    const updatedProfiles = profiles.map(p =>
      p.name === name ? { ...p, isLogined: false } : p
    );
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const loggedInProfiles = profiles.filter(p => p.isLogined);



  return (
    <>
    <Header />
    <Paragraph />

    <SearchFilmLine>
        <Search />
        <Button text="Войти"/>
    </SearchFilmLine>
    
    <Cards/>

    <Header loggedInProfiles={loggedInProfiles} handleLogout={handleLogout}/>
    <div style={{display: "flex", flexDirection:"column", rowGap: "27px", alignItems: "flex-start"}}>
      <span className='enter'>Вход</span>
      <InputField ref={nameRef}/>
      <Button text="Войти в профиль" onClick={handleLogin} />
    </div>
    </>
  )
}

export default App
