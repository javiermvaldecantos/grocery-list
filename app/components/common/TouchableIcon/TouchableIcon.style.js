import {StyleSheet} from 'react-native';

const touchable_icon_styles = StyleSheet.create({
  wrapper_android: {
    width: GLOBAL_HEIGHT.TOUCH_TARGET,
    height: GLOBAL_HEIGHT.TOUCH_TARGET,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: PRIMARY_COLOR.MAIN
  },
  wrapper_ios: {
    width: GLOBAL_HEIGHT.TOUCH_TARGET,
    height: GLOBAL_HEIGHT.TOUCH_TARGET,
    paddingHorizontal: 12,
    paddingVertical: 12
  }
});

export default touchable_icon_styles;
