import React from 'react';
import global_color_palette from './global/color_palette.js';
import global_layout from './global/layout.js';
import global_typography from './global/typography.js';
import SampleComponent from './components/SampleComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <SampleComponent title="Grocery List"/>
    )
  }
}

export default AppComponent;
