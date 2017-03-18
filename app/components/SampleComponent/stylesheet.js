import {StyleSheet} from 'react-native';

const sample_component_styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR.MAIN,
    paddingHorizontal: GLOBAL_SPACING.S,
    paddingVertical: GLOBAL_SPACING.S,
    height: GLOBAL_HEIGHT.APP_BAR
  },
  text: {
    fontSize: FONT_SIZE.APP_BAR,
    color: FONT_COLOR.PRIMARY.LIGHT,
    height: GLOBAL_HEIGHT.APP_BAR
  }
});

export default sample_component_styles;
