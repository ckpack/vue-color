export { throttle } from 'lodash-es';

/* eslint-disable no-nested-ternary */
export function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
}
