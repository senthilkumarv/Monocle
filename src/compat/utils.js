// With thanks to https://github.com/tombigel/detect-zoom.
//
Monocle.Utils.calcWebkitScaleFactor = function (doc) {
  var svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('version', '1.1');
  doc.body.appendChild(svg);
  var zoom = svg.currentScale;
  doc.body.removeChild(svg);
  return zoom;
}
