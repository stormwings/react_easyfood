import axios from 'axios';
import { useDispatch } from 'react-redux';

export const refreshToken = (token_refresh: string) => async () => {
  const dispatch = useDispatch();

  dispatch({
    type: 'TOKEN_LOADING'
  });

  const body: object = {
    token_refresh
  };

  try {
    const { token } = await axios.post('https://localhost:8000/token/get_token', body);
    dispatch({
      type: 'TOKEN',
      payload: token
    });
  } catch (error) {
    const { message } = error;
    dispatch({
      type: 'ERROR',
      payload: message
    });
  }
};
