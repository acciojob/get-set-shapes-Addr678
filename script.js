class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  getPerimeter() {
    return 4 * this._width;
  }
}

function calculateArea() {
  const width = Number(document.getElementById('widthInput').value);
  const height = Number(document.getElementById('heightInput').value);

  const rectangle = new Rectangle(width, height);
  const area = rectangle.getArea();

  document.getElementById('areaLabel').textContent = `Area: ${area}`;
}

function calculatePerimeter() {
  const sideLength = Number(document.getElementById('sideInput').value);

  const square = new Square(sideLength);
  const perimeter = square.getPerimeter();

  document.getElementById('perimeterLabel').textContent = `Perimeter: ${perimeter}`;
}
