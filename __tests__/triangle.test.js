import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {
let reusableTriangle;

  test('Should label object correctly as "triangle"', () => {
    let reusableTriangle = new Triangle(5, 5, 5);
    expect(reusableTriangle.triangleType).toEqual("triangle");
    });
  test('Should label object correctly as "Equilateral Triangle"', () =>  {
    let reusableTriangle = new Triangle(5, 5, 5);
    expect(reusableTriangle.triangleKind).toEqual("Equilateral Triangle");
  });
  test('Should label object correctly as "Isosceles Triangle"', () => {
    let reusableTriangle = new Triangle(5, 3, 5);
    expect(reusableTriangle.triangleKind).toEqual("Isosceles Triangle");
  });
  test('Should label object correctly as "Scalene Triangle"', () => {
    let reusableTriangle = new Triangle(3, 4, 5);
    expect(reusableTriangle.triangleKind).toEqual("Scalene Triangle");
  });
});