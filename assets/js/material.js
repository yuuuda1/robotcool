/* 
*** Material Design Components ***
1. App Bars: top
2. Buttons
3. Buttons: floating action button
4. Buttons: icon button
5. Cards
6. Chips
7. Data tabels
8. Dialogs
9. Image list
10. Lists
11. Menus
12. Navigaton drawer
13. Progress indicators
14. Selection controls: checkboxes
15. Selection controls: radio buttons
16. Selection controls: switches
17. Sliders
18. Snackbars
19. Tabs
20. Text fields
E1. Selects
*/


/* -- 1. App Bars: top -- */
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);


/* -- 2. Buttons -- */
// - Eye - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.eye-button'));
// - Mouse - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mouse-button'));
// - head - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.head-button'));


/* -- 8. Dialogs -- */
const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
// const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-dialog .mdc-list'));
dialog.listen('MDCDialog:opened', () => {
  console.log("open dailog")
  // list.layout();
});


/* -- 17. Sliders -- */
// - Eye - 
const eyeSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-size'));
eyeSize.listen('MDCSlider:change', () => console.log(`Value changed to ${eyeSize.value}`));
const eyeWidth = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-width'));
eyeWidth.listen('MDCSlider:change', () => console.log(`Value changed to ${eyeWidth.value}`));
const eyeHeight = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-height'));
eyeHeight.listen('MDCSlider:change', () => console.log(`Value changed to ${eyeHeight.value}`));
// - Pupil -
const pupilS = mdc.slider.MDCSlider.attachTo(document.querySelector('.pupil-size'));
pupilS.listen('MDCSlider:change', () => console.log(`Value changed to ${pupilS.value}`));
// - Mouse - 
const mouseSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-size'));
mouseSize.listen('MDCSlider:change', () => console.log(`Value changed to ${mouseSize.value}`));
// - Head -
// const headSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.head-size'));
// mouseSize.listen('MDCSlider:change', () => console.log(`Value changed to ${headSize.value}`));


/* -- 18. Tabs -- */
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTABBAR:change', () => console.log(`Value changed to ${tabBar.value}`));


/* -- E1. Selects -- */
// - Eye - 
const eyeSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.eye-select'));
// - Mouse - 
const mouseSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.mouse-select'));
// - Head -
const headSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.head-select'));
// - Display -
const displaySlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.display-select'));