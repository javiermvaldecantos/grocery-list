/**
 * layout.js
 *
 * This file contains the global variables that define the layout of the app
 */

// global spacing - To be used for margins, paddings, and separation in between elements
const GLOBAL_SPACING = {
  XXS: 4,
  XS: 8,
  S: 16,
  M: 24,
  L: 40,
  XL: 64,
  XXL: 104
}

// heights to be used in different components of the app
const GLOBAL_HEIGHT = {
  APP_BAR: 56,
  APP_BAR_LANDSCAPE: 48,
  LIST_TITLE: 72,
  LIST_SUBTITLE: 48,
  LIST_ITEM: 72,
  NAVIGATION_DRAWER_ITEM: 48,
  BUTTON: 36,
  TOUCH_TARGET: 48,
  HEADER_ICON: 24
}

global.GLOBAL_SPACING = GLOBAL_SPACING;
global.GLOBAL_HEIGHT = GLOBAL_HEIGHT;

export { GLOBAL_SPACING, GLOBAL_HEIGHT }
