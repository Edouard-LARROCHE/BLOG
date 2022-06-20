import React, { useEffect, useState } from 'react';
import { UidContext } from './AppContext';
import axios from 'axios';
import Login from './components/Log/Login';
import GetPost from './components/Post/GetPost';
// REDUX
import { useDispatch } from 'react-redux';
import { getUserData } from './feature-redux/user.slice';
import Register from './components/Log/Register';

const App = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios
        .get(`${process.env.REACT_APP_API}/jwtid`)
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log('No token ' + err));
    };
    fetchToken();

    if (uid) dispatch(getUserData(uid));
  }, [dispatch, uid]);

  return (
    <UidContext.Provider value={uid}>
      <div>
        <Register />
        <Login />
        <GetPost />
      </div>
    </UidContext.Provider>
  );
};

export default App;
