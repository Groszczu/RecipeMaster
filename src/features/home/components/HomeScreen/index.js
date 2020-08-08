import HomeScreen from './HomeScreen';
import useHomeScreenViewModel from '../../useHomeScreenViewModel';
import withViewModel from '../../../../components/hoc/withViewModel';

export default withViewModel(HomeScreen, useHomeScreenViewModel);
