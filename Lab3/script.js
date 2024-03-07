(() => {
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
    console.log(truck1,truck2);
})();
