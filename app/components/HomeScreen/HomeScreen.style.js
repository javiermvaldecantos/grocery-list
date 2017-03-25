import {StyleSheet,Platform} from 'react-native';

var headerStyles = {
  paddingHorizontal: GLOBAL_SPACING.XXS,
}
if(Platform.OS === 'android') headerStyles.backgroundColor = PRIMARY_COLOR.MAIN;

var headerTitleStyles = {}
if(Platform.OS === 'android') headerTitleStyles.color = FONT_COLOR.PRIMARY.LIGHT;

const home_screen_styles = StyleSheet.create({
  header: headerStyles,
  title: headerTitleStyles
});

export default home_screen_styles;
