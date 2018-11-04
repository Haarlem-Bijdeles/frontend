/* eslint-disable */
export default function scrollTo(element, to, duration) {
  const start = element.scrollLeft;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

// t = current time
// b = start value
// c = change in value
// d = duration
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
