import HomeScreen from './HomeScreen';
import useHomeScreenViewModel from '../../useHomeScreenViewModel';
import withViewModel from '../../../../hoc/withViewModel';

export default withViewModel(HomeScreen, useHomeScreenViewModel);
