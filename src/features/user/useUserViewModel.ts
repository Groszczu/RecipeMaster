import { useSelector } from 'react-redux';
import { getUserName, getIsLoggedIn, getPicture } from './selectors';

const useUserViewModel = () => {
  const userName = useSelector(getUserName);
  const picture = useSelector(getPicture);
  const loggedIn = useSelector(getIsLoggedIn);
  return { loggedIn, userName, picture: picture?.data || null };
};

export default useUserViewModel;
