function Task1() {
    const car1 = new Object();

    car1.color = "Red";
    car1.maxSpeed = 200;
    car1.driver = new Object();
    car1.driver.name = "John";
    car1.driver.category = "C";
    car1.driver.personalLimitations = "I am not driving at night».";
    car1.tuning = true;
    car1.numberOfAccidents = 0;

    const car2 = {
        color: "Blue",
        maxSpeed: 100,
        driver: {
            name: "Sasha",
            category: "B",
            personalLimitations: null,
        },
        tuning: false,
        numberOfAccidents: 2,
    };
    car2.drive = function () {
        console.log("I am driving anytime.");
    };
    car1.drive = () => {
        console.log("I am not driving at night».");
    };
    console.log(car1);
    car1.drive();
    car2.drive();
    console.log(car2);

    function Truck(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
        this.driver = null;
    }

    Truck.prototype.AssignDriver = function (
        drivername,
        nightDriving,
        experience
    ) {
        this.driver = {
            name: drivername,
            nightDriving: nightDriving,
            experience: experience,
        };
    };
    Truck.prototype.trip = function () {
        if (this.driver) {
            console.log(
                `Driver ${this.driver.name} ${
                    this.driver.nightDriving
                        ? "drives at night"
                        : "does not drive at night"
                }` + ` and has ${this.driver.experience} years of experience»`
            );
        } else {
            console.log("Driver not assigned");
        }
    };
    let truck1 = new Truck("red", 12, 90, "Man", "SLiner");
    let truck2 = new Truck("blue", 16, 120, "DAF", "XF95");
    truck1.AssignDriver("John Doe", true, 5);
    truck2.AssignDriver("Ivan", false, 1);
    truck1.trip();
    truck2.trip();
    console.log(truck1, truck2);
}
// 1.2.12
class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("-".repeat(40));
        console.log(
            "Квадрат - це геометрична фігура з чотирма рівними сторонами та чотирма прямими кутами."
        );
        console.log("Основні властивості:");
        console.log("- Кожна сторона має однакову довжину.");
        console.log(
            "- Периметр - сума всіх чотирьох сторін (P = 4 * сторона)."
        );
        console.log("- Площа - квадрат сторони (A = сторона^2).");
    }
    length() {
        return this.a * 4;
    }

    square() {
        return this.a ** 2;
    }
    info() {
        console.log(
            `----Інформація Квадрата-----\n` +
                `Довжини сторін: ${this.a}\n` +
                `Величина всіх 4 кутів: 90 градусів\n` +
                `Сума довжин сторін: ${this.length()}\n` +
                `Площа: ${this.square()}`
        );
    }
}
// 1.2.16
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("-".repeat(40));
        console.log(
            "Прямокутник - це геометрична фігура з двома різними сторонами та чотирма кутами."
        );
        console.log("Основні властивості:");
        console.log("- Довжина (a) та ширина (b) визначаються відповідно.");
        console.log("- Периметр - сума всіх сторін (P = 2 * (a + b)).");
        console.log("- Площа - добуток довжини та ширини (A = a * b).");
    }
    length() {
        return 2 * (this.a + this.b);
    }
    square() {
        return this.a * this.b;
    }
    info() {
        console.log(
            `----Інформація Прямокутника-----\n` +
                `Довжини  сторін a та b: ${this.a} ${this.b}\n` +
                `Величина всіх 4 кутів: 90 градусів\n` +
                `Сума довжин сторін: ${this.length()}\n` +
                `Площа: ${this.square()}`
        );
    }
}
// 1.2.18
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    // 1.2.22
    get a() {
        return super.a;
    }
    set a(p) {
        super.a = p;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(alpha) {
        this._alpha = alpha;
    }
    get beta() {
        return this._beta;
    }
    set beta(beta) {
        this._beta = beta;
    }
    static help() {
        console.log("-".repeat(40));
        console.log(
            "Ромб - це геометрична фігура, яка має чотири рівні сторони та протилежні кути рівного розміру. Основні властивості ромба включають:"
        );
        console.log("Основні властивості:");
        console.log("- Протилежні кути мають однаковий розмір.");
        console.log("- Периметр - сума всіх сторін (P =a*4).");
        console.log(
            "- Площа ромба - добуток довжин двох діагоналей поділений на 2 (A = (d₁ * d₂) / 2)."
        );
    }
    // lenght identicaly to square metod not need implementation

    square() {
        return this.a ** 2 * Math.sin(this.alpha * (Math.PI / 180));
    }
    info() {
        console.log(
            `----Інформація Ромба-----\n` +
                `Довжини  сторін дорівнюють: ${this.a}\n` +
                `Величина кутів alpha та beta: ${this.alpha}, ${this.beta}\n` +
                `Сума довжин сторін: ${this.length()}\n` +
                `Площа: ${this.square()}`
        );
    }
}
// 1.2.20
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("-".repeat(40));
        console.log(
            "Паралелограм - це чотирикутник з протилежними сторонами, які паралельні та рівні."
        );
        console.log("Основні властивості:");
        console.log("- Протилежні сторони паралельні та рівні за довжиною.");
        console.log("- Протилежні кути рівні за розміром.");
        console.log("- Діагоналі перетинаються в середині паралелограма.");
        console.log("- Периметр - сума всіх сторін.");
    }
    // lenght identicaly to rectagle metod not need implementation
    square() {
        return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
    }
    info() {
        console.log(
            `----Інформація Паралелограма-----\n` +
                `Довжини  сторін дорівнюють а та b: ${this.a}, ${this.b}\n` +
                `Величина кутів alpha та beta: ${this.alpha}, ${this.beta}\n` +
                `Сума довжин сторін: ${this.length()}\n` +
                `Площа: ${this.square()}`
        );
    }
}
// 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
// 1.2.24
const square = new Square(5);
const rectangle = new Rectangle(12, 15);
const rhombus = new Rhombus(12, 100, 80);
const pararellogram = new Parallelogram(4, 5, 60, 120);

square.info();
rectangle.info();
rhombus.info();
pararellogram.info();

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
// 1.2.26
const triangle1 = Triangular();
const triangle2 = Triangular(7, 7, 9);
const triangle3 = Triangular(11, 9, 5);
console.log("Triangle default:", triangle1);
console.log("Triangle 1:", triangle2);
console.log("Triangle 2:", triangle3);
// 1.2.27
function PiMultiplier(number) {
    return function () {
        return number * Math.PI;
    };
}

const Pimult2 = PiMultiplier(2);
console.log("2*pi result = ", Pimult2());
const PiMult2_3 = PiMultiplier(2 / 3);
console.log("(2/3)*pi result = ", PiMult2_3());
const divenePi2 = PiMultiplier(1 / 2);
console.log("pi/2 result = ", divenePi2());
function Painter(color) {
    return function (obj) {
        const type =
            obj && obj.type ? obj.type : "No 'type' property occurred!";
        console.log(`Color: ${color}, Type: ${type}`);
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true };
PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
