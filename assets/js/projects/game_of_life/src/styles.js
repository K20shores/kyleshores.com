const load_styles = () => {
  // Get the computed style of the body
  const style = getComputedStyle(document.body);

  let styles = {};

  styles['primary'] = style.getPropertyValue('--md-sys-color-primary');
  styles['on-primary'] = style.getPropertyValue('--md-sys-color-on-primary');
  styles['primary-container'] = style.getPropertyValue('--md-sys-color-primary-container');
  styles['tertiary'] = style.getPropertyValue('--md-sys-color-tertiary');
  styles['on-tertiary'] = style.getPropertyValue('--md-sys-color-on-tertiary');

  return styles;;
}

const styles = load_styles();

export {
  styles
}