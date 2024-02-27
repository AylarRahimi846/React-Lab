import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User/User';
import Header from './components/Header/Header';


function App() {
  let [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => { setUsers(data.results);})
  }, []);
  

  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='container'>
      {users.map(user => (
        <User
          gender={user.gender}
          age={user.dob.age}
          {...user.name}
          {...user.location}
          email={user.email}
          phone={user.phone}
          picture={user.picture.large}
        />
      ))}
    </div>
    </>

  )

}

export default App
