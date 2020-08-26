//-- Buttons --
// - Eye - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.eye-button'));
// - Mouse - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mouse-button'));
// - head - 
mdc.ripple.MDCRipple.attachTo(document.querySelector('.head-button'));

//-- Slider --
// - Eye - 
const sliderH = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-size-h'));
sliderH.listen('MDCSlider:change', () => console.log(`Value changed to ${sliderH.value}`));
// - Pupil -
const pupilS = mdc.slider.MDCSlider.attachTo(document.querySelector('.pupil-size'));
pupilS.listen('MDCSlider:change', () => console.log(`Value changed to ${pupilS.value}`));
// - Mouse - 
const mouseSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.mouse-size'));
mouseSize.listen('MDCSlider:change', () => console.log(`Value changed to ${mouseSize.value}`));
// - Head -
const headSize = mdc.slider.MDCSlider.attachTo(document.querySelector('.head-size'));
mouseSize.listen('MDCSlider:change', () => console.log(`Value changed to ${headSize.value}`));

//-- Select --
// - Eye - 
const eyeSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.eye-select'));
// - Mouse - 
const mouseSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.mouse-select'));
// - Head -
const headSelect = new mdc.select.MDCSelect.attachTo(document.querySelector('.head-select'));