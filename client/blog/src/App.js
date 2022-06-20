import React, { useEffect, useState } from 'react';
import Router from './Routes';
import { UidContext } from './AppContext';
import axios from 'axios';
// REDUX
import { useDispatch } from 'react-redux';
import { getUser } from './feature-redux/user.slice';

const App = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log('No token ' + err));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [dispatch, uid]);

  return (
    <UidContext.Provider value={uid}>
      <Router />
    </UidContext.Provider>
  );
};

export default App;
