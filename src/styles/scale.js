import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
