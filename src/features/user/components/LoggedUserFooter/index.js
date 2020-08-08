import withViewModel from '../../../../hoc/withViewModel';
import LoggedUserFooter from './LoggedUserFooter';
import useUserViewModel from '../../useUserViewModel';

export default withViewModel(LoggedUserFooter, useUserViewModel);
