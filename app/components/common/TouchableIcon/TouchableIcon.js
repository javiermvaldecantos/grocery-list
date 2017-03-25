import React from 'react';
import {Platform, View, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from './TouchableIcon.style.js';

const TouchableIcon = ({onPress, icon_ios, wrapperStyle_ios, icon_android, wrapperStyle_android}) => {

  return (
    <View>
      {Platform.OS === 'ios' ? (

        <TouchableOpacity onPress={onPress}>
          <View style={wrapperStyle_ios ? [styles.wrapper_ios, wrapperStyle_ios] : styles.wrapper_ios}>
            {icon_ios}
          </View>
        </TouchableOpacity>

      ):(

        <TouchableNativeFeedback onPress={onPress}
                                 background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={wrapperStyle_android ? [styles.wrapper_android, wrapperStyle_android] : styles.wrapper_android}>
            {icon_android}
          </View>
        </TouchableNativeFeedback>

      )}
    </View>
  );

}

export default TouchableIcon;
