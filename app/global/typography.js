/**
 * typography.js
 *
 * This file contains the global variables that define the typography rules
 */

// font color
const FONT_COLOR = {
  PRIMARY: { LIGHT: 'rgba(255, 255, 255, 1.0)' , DARK: 'rgba(0, 0, 0, 0.87)' },
  SECONDARY: { LIGHT: 'rgba(255, 255, 255, 0.7)' , DARK: 'rgba(0, 0, 0, 0.54)' },
  DISABLED: { LIGHT: 'rgba(255, 255, 255, 0.5)' , DARK: 'rgba(0, 0, 0, 0.38)' },
  HINT: { LIGHT: 'rgba(255, 255, 255, 0.5)' , DARK: 'rgba(0, 0, 0, 0.38)' },
  DIVIDERS: { LIGHT: 'rgba(255, 255, 255, 0.12)' , DARK: 'rgba(0, 0, 0, 0.12)' }
}

// font size
const FONT_SIZE = {
  XXXLARGE: 112,
  XXLARGE: 56,
  XLARGE: 45,
  LARGE: 34,
  HEADLINE: 24,
  APP_BAR: 20,
  TITLE: 20,
  SUBHEADING: 16,
  BODY: 14,
  BUTTONS: 14,
  CAPTION: 12
}

global.FONT_COLOR = FONT_COLOR;
global.FONT_SIZE = FONT_SIZE;

export { FONT_COLOR, FONT_SIZE };
