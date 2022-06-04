addEventListener('devicemotion', event => function () {
  document.getElementByID("ax").innerHTML = event.acceleration.x.toString();
  document.getElementByID("ay").innerHTML = event.acceleration.y.toString();
  document.getElementByID("az").innerHTML = event.acceleration.z.toString();
}, true);