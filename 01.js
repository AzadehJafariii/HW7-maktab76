
// Your task is to create a Circle constructor that creates a circle with a radius provided by an
// argument. The circles constructed must have two methods getArea() (PI*r^2) and
// getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference)

function Circleconstructor(R){
    this.radius = R;
    this.getArea = function(){
        return Math.round(Math.PI*Math.pow(this.radius, 2));
    }
    this.getPerimeter = function(){
        return Math.round(2*Math.PI*this.radius);
    }
}

let firstCircle = new Circleconstructor(1);
console.log(firstCircle.getArea());
console.log(firstCircle.getPerimeter());
