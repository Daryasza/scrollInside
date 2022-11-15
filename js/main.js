//3D scroll

const frames = Array.from(document.getElementsByClassName('frame')); 
const zSpacing = -2000;
let lastPos = zSpacing / 5;
let zVals = [];

window.onscroll = function() {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;

  console.log(top);
  console.log(delta);
  lastPos = top;

  frames.forEach(function(n, i) {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  })

}

window.scrollTo(0, 1);
