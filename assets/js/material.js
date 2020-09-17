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
const colorDialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
colorDialog.listen('MDCDialog:opened', () => {
  console.log("open dailog");
  cmRed.layout();
  cmGreen.layout();
  cmBlue.layout();
  cmAlpha.layout();
});
// colorDialog.listen('MDCDialog:closed', () => {
//   console.log("close dailog");
// });

const elmA = document.querySelectorAll('#color-dialog');
for (let i = 0; i < elmA.length; i++) {
  elmA[i].addEventListener('click', () => {
    colorDialog.open();
  });
}

// document.querySelector('#mouse-color-dailog').addEventListener('click', function (evt) {
//   // colorDialog.open();
// });

function reloadButton() {
  var value = document.getElementById("color-model-red").getAttribute("now") - document.getElementById("color-model-red").getAttribute("aria-valuenow");
  if (value > 0) cmRed.stepUp(value);
  if (value < 0) cmRed.stepDown(Math.abs(value));
  red = document.getElementById("color-model-red").getAttribute("now");

  var value = document.getElementById("color-model-green").getAttribute("now") - document.getElementById("color-model-green").getAttribute("aria-valuenow");
  if (value > 0) cmGreen.stepUp(value);
  if (value < 0) cmGreen.stepDown(Math.abs(value));
  green = document.getElementById("color-model-green").getAttribute("now");

  var value = document.getElementById("color-model-blue").getAttribute("now") - document.getElementById("color-model-blue").getAttribute("aria-valuenow");
  if (value > 0) cmBlue.stepUp(value);
  if (value < 0) cmBlue.stepDown(Math.abs(value));
  blue = document.getElementById("color-model-blue").getAttribute("now");

  var value = document.getElementById("color-model-alpha").getAttribute("now") - document.getElementById("color-model-alpha").getAttribute("aria-valuenow");
  if (value > 0) cmAlpha.stepUp(value);
  if (value < 0) cmAlpha.stepDown(Math.abs(value));
  alpha = document.getElementById("color-model-alpha").getAttribute("now");
}


/* -- 17. Sliders -- */
// -- Color Model --
// - Red -
const cmRed = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-dialog .color-model-red'));
cmRed.listen('MDCSlider:change', () => console.log(`Value changed to ${cmRed.value}`));
// - Green -
const cmGreen = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-dialog .color-model-green'));
cmGreen.listen('MDCSlider:change', () => console.log(`Value changed to ${cmGreen.value}`));
// - Blue -
const cmBlue = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-dialog .color-model-blue'));
cmBlue.listen('MDCSlider:change', () => console.log(`Value changed to ${cmBlue.value}`));
// - Alpha -
const cmAlpha = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-dialog .color-model-alpha'));
cmAlpha.listen('MDCSlider:change', () => console.log(`Value changed to ${cmAlpha.value}`));
/* -- 17.2 Head -- */
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

/* -- 17.2 Body -- */
// - Neck -
const neckSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.neck-size'));
neckSize.listen('MDCSlider:change', () => console.log(`Value changed to ${neckSize.value}`));
// - Arm -
const armWidth = mdc.slider.MDCSlider.attachTo(document.querySelector('.arm-width'));
armWidth.listen('MDCSlider:change', () => console.log(`Value changed to ${armWidth.value}`));
const armHeight = mdc.slider.MDCSlider.attachTo(document.querySelector('.arm-height'));
armHeight.listen('MDCSlider:change', () => console.log(`Value changed to ${armHeight.value}`));
// - Leg -
const legWidth = mdc.slider.MDCSlider.attachTo(document.querySelector('.leg-width'));
legWidth.listen('MDCSlider:change', () => console.log(`Value changed to ${legWidth.value}`));
const legHeight = mdc.slider.MDCSlider.attachTo(document.querySelector('.leg-height'));
legHeight.listen('MDCSlider:change', () => console.log(`Value changed to ${legHeight.value}`));
// - Body - 
// const bodySlider = mdc.slider.MDCSlider.attachTo(document.querySelector('.body-size'));
// bodySlider.listen('MDCSlider:change', () => console.log(`Value changed to ${bodySlider.value}`));


/* -- 18. Tabs -- */
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTABBAR:change', () => console.log(`Value changed to ${tabBar.value}`));


/* -- 20. Text -- */


/* -- E1. Selects -- */
// - Eye - 
const eyeSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.eye-select'));
// - Mouse - 
const mouseSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.mouse-select'));
// - Head -
const headSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.head-select'));
// - Display -
const displaySlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.display-select'));
// - Neck -
const neckSlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.neck-select'));
// - Arm -
const arnSlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.arm-select'));
// - Leg -
const armSlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.leg-select'));
// - Body -
const bodySlect = new mdc.select.MDCSelect.attachTo(document.querySelector('.body-select'));