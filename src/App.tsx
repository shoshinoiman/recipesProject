import { createContext, useReducer } from 'react';
import './App.css';
import Register from './components/login/Register';
import Login from './components/login/Login';
import { user, userReduse } from './reducer/userReduce';
import LetterAvatars from './components/login/avatar';
import { myRouter } from './Router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store/Store';

export const userContext = createContext<{ user: user | null; userDispatch: React.Dispatch<any> }>({ user: null, userDispatch: () => { } });

function App() {
  const [state, userDispatch] = useReducer(userReduse, {} as user);

  return (
    <div style={{
      // backgroundColor: "#f5f5f5", 
      minHeight: "100vh",  // מינימום גובה של המסך
      width: "", 
      display: "", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "20px",
    }}>
      <Provider store={Store}>
        <userContext.Provider value={{ user: state, userDispatch }}>
          <div className="app-container" style={{ width: "100%", maxWidth: "1200px" }}>
            <RouterProvider router={myRouter} />
          </div>
        </userContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
