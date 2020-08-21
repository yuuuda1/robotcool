mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

const slider = mdc.slider.MDCSlider.attachTo(document.querySelector('.eye-size-h'));
slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));

function getSlideValue() {
  return slider.value;
}