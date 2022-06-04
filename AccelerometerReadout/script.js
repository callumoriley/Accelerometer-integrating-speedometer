let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
  document.getElementByID("ax").innerHTML = acl.x.toString();
  document.getElementByID("ay").innerHTML = acl.y.toString();
  document.getElementByID("az").innerHTML = acl.z.toString();
});

acl.start();