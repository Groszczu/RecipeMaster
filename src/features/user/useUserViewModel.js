const { useSelector } = require('react-redux');
const { getUserName, getIsLoggedIn, getPicture } = require('./selectors');

const useUserViewModel = () => {
  const userName = useSelector(getUserName);
  const picture = useSelector(getPicture);
  const loggedIn = useSelector(getIsLoggedIn);
  return { loggedIn, userName, picture };
};

export default useUserViewModel;
