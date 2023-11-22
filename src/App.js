import { Router } from './router/Router'
import { context } from './context/context'
import { useState } from 'react'
import { useEffect } from 'react'
import { Modal } from './components/Modal'
import { Login } from './components/Login/Login'
import { SignUp } from './components/SignUp/SignUp'
import { Contact } from './components/Contact/Contact'

function App() {
  const [user, setUser] = useState('Diego')
  const [visibleLogIn, setVisibleLogIn] = useState(false);
  const [visibleSignUp, setVisibleSignUp] = useState(false);
  const [visibleContact, setVisibleContact] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

   console.log('Llamada Backend')

     fetch('https://apimas.onrender.com/')
        .then((response) => response.text())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div className="App">
      <context.Provider value={{
        setUser,
        user,
        setVisibleLogIn,
        setVisibleSignUp,
        setVisibleContact
      }}>
        <Router />
        {visibleLogIn && (
          <Modal
            componente={<Login setVisibleOther={setVisibleSignUp} setVisibleSelf={setVisibleLogIn} />}
            setVisible={setVisibleLogIn}
          />
        )}
        {visibleSignUp && (
          <Modal
            componente={<SignUp setVisibleOther={setVisibleLogIn} setVisibleSelf={setVisibleSignUp} />}
            setVisible={setVisibleSignUp}
          />
        )}
        {visibleContact && (
          <Modal
            componente={<Contact/>}
            setVisible={setVisibleContact}
          />
        )}
      </context.Provider>
    </div>
  )
}

export default App
