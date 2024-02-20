import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import UserList from './components/UserList'
import Form from './components/Form'
import Navigation from './components/Navigation'

const UsersContext = createContext()

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUsers([...users, data.results[0].name.first]));
  }, []);
  

  return (
    <>
    <UsersContext.Provider value={{ users, setUsers }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          
          <Route path="/home" element={<UserList />} />
          <Route path="/profile" element={<Form />} />
        </Routes>
        <Navigation />
      </Router>
      </UsersContext.Provider>
    </>
  );
}

export default App

export const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
};
