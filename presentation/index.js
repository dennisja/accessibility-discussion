import speaker from './slides/speaker.mdx';
import accessibilityIntroSlides from './slides/accessibility.mdx';
import focusSlides from './slides/focus.mdx';
import semanticsSlides from './slides/semantics.mdx';

export { default as theme } from './theme';

export default [
  ...speaker,
  ...accessibilityIntroSlides,
  ...focusSlides,
  ...semanticsSlides,
];
