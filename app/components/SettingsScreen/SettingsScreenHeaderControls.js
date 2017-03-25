import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../common/TouchableIcon';
import styles from './SettingsScreenHeaderControls.style.js';

const LeftHeaderControls = ({onBackButtonPress}) => {
  return (
    <TouchableIcon onPress={onBackButtonPress}
                   icon_ios={<IonIcon name="ios-arrow-back" style={styles.icon_ios} />}
                   icon_android={<MaterialIcon name="arrow-back" style={styles.icon_android} />} />
  );
}

export { LeftHeaderControls };
