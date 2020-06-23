export function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.triangleType = this.findTriangle();
  this.triangleKind = this.triangleKind();
}

Triangle.prototype.findTriangle = function() {
  if(this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1){
    return "not a triangle";
  } else {
    return "triangle";
  }
};

Triangle.prototype.triangleKind = function() {
  if (this.side1 === this.side2 && this.side1 === this.side3) {
  return "Equilateral Triangle";
  } else if (this.side1 === this.side2 || this.side1 === this.side3) {
    return "Isosceles Triangle";
  } else if (this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3)  {
    return "Scalene Triangle";
  } else {
    return "Not triangle";
  }
};


// Triangle.prototype.triangleTrue = function(){
// if(this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
//   this.isOrIsNotTriangle = true;
// } else this.isOrIsNotTriangle = false;
// };

