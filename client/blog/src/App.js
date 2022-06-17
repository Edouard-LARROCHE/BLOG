import React, { useEffect, useState } from 'react';
import { UidContext } from './AppContext';
import axios from 'axios';
import FormPost from './components/post/FormPost';
import GetPost from './components/post/GetPost';

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchToken();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <div>
        <FormPost />
        <GetPost />
      </div>
    </UidContext.Provider>
  );
};

export default App;
