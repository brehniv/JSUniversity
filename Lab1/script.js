function round2(number) {
    const roundedNumber = number.toFixed(2);
    return parseFloat(roundedNumber);
}
function triangle(value1, type1, value2, type2) {
    // Перевірка на некоректність уведених значень
    if (value1 <= 0 || value2 <= 0) {
        return "failed: value must be possitive";
    }
    const validTypes = [
        "leg",
        "hypotenuse",
        "adjacent angle",
        "opposite angle",
        "angle",
    ];
    const anglesList = ["adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        return "failed: input types error";
    }
    if (anglesList.includes(type1)) {
        if (value1 < 0 || value1 > 90) {
            return "failed: incorect angle " + type1;
        }
    }
    if (anglesList.includes(type2)) {
        if (value2 < 0 || value2 > 90) {
            return "failed: incorect angle " + type2;
        }
    }
    if (type1 === "hypotenuse" && type2 === "hypotenuse") {
        return "failed: 2 hypotenuse in triangle";
    }
    let a, b, c, alpha, beta;
    switch (type1) {
        case "leg":
            {
                a = value1;
                switch (type2) {
                    case "leg": {
                        b = value2;
                        c = Math.sqrt(a ** 2 + b ** 2);
                        alpha = Math.atan(a / b) * (180 / Math.PI);
                        beta = 90 - alpha;
                        break;
                    }
                    case "hypotenuse": {
                        if (a > value2)
                            return "failed: hypotenuse smaller than leg";
                        c = value2;
                        b = Math.sqrt(c ** 2 - a ** 2);
                        alpha = Math.atan(a / b) * (180 / Math.PI);
                        beta = 90 - alpha;
                        break;
                    }
                    case "adjacent angle": {
                        alpha = value2;
                        c = a / Math.cos(alpha * (Math.PI / 180));
                        b = Math.sqrt(c ** 2 - a ** 2);
                        beta = 90 - alpha;
                        break;
                    }
                    case "opposite angle": {
                        beta = value2;
                        c = a / Math.sin(beta);
                        b = Math.sqrt(c ** 2 - a ** 2);
                        alpha = 90 - beta;
                        break;
                    }
                }
            }
            break;
        case "hypotenuse":
            {
                c = value1;
                switch (type2) {
                    case "leg": {
                        if (c < value2) {
                            return "failed: hypotenuse smaller than leg";
                        }
                        a = value2;
                        b = Math.sqrt(c ** 2 - a ** 2);
                        alpha = Math.atan(a / b) * (180 / Math.PI);
                        beta = 90 - alpha;
                        break;
                    }
                    case "angle": {
                        alpha = value2;
                        beta = 90 - alpha;
                        b = c * Math.sin(beta * (Math.PI / 180));
                        a = Math.sqrt(c ** 2 - b ** 2);
                        break;
                    }
                }
            }
            break;
        case "opposite angle":
            {
                alpha = value1;
                beta = 90 - alpha;
                switch (type2) {
                    case "leg": {
                        a = value2;
                        c = a / Math.cos(alpha * (Math.PI / 180));
                        b = Math.sqrt(c ** 2 - a ** 2);
                        break;
                    }
                    case "hypotenuse": {
                        c = value2;
                        b = c * Math.sin(beta * (Math.PI / 180));
                        a = Math.sqrt(c ** 2 - b ** 2);
                        break;
                    }
                }
            }
            break;
        case "adjacent angle":
            {
                alpha = value1;
                beta = 90 - alpha;
                switch (type2) {
                    case "leg": {
                        a = value2;
                        c = a / Math.cos(alpha * (Math.PI / 180));
                        b = Math.sqrt(c ** 2 - a ** 2);
                        break;
                    }
                    case "hypotenuse": {
                        c = value2;
                        b = c * Math.sin(beta * (Math.PI / 180));
                        a = Math.sqrt(c ** 2 - b ** 2);
                        break;
                    }
                }
            }
            break;
        case "angle":
            {
                beta = value1;
                switch (type2) {
                    case "hypotenuse":
                        c = value2;
                        b = c * Math.sin(beta * (Math.PI / 180));
                        a = Math.sqrt(c ** 2 - b ** 2);
                        alpha = 90 - beta;
                        break;
                }
            }
            break;
    }
    return `a = ${round2(a)}\nb = ${round2(b)}\nc = ${round2(
        c
    )}\nalpha = ${round2(alpha)}°\nbeta = ${round2(beta)}°\n"success"`;
}

// Test Cases for leg-leg scenario
console.log(triangle(3, "leg", 4, "leg"));

// Test Cases for leg-hypotenuse scenario
console.log(triangle(3, "leg", 5, "hypotenuse"));

// Test Cases for leg-adjacent angle scenario
console.log(triangle(4, "leg", 8, "adjacent angle"));

// Test Cases for leg-opposite angle scenario
console.log(triangle(3, "leg", 45, "opposite angle"));

// Test Cases for hypotenuse-leg scenario
console.log(triangle(5, "hypotenuse", 4, "leg"));

// Test Cases for hypotenuse-angle scenario
console.log(triangle(5, "hypotenuse", 30, "angle"));

// Test Cases for opposite angle-leg scenario
console.log(triangle(45, "opposite angle", 3, "leg"));

// Test Cases for opposite angle-hypotenuse scenario
console.log(triangle(45, "opposite angle", 5, "hypotenuse"));

// Test Cases for adjacent angle-leg scenario
console.log(triangle(45, "adjacent angle", 3, "leg"));

// Test Cases for adjacent angle-hypotenuse scenario
console.log(triangle(45, "adjacent angle", 5, "hypotenuse"));

// Test Cases for angle-hypotenuse scenario
console.log(triangle(30, "angle", 6, "hypotenuse"));

// Test Cases for invalid input (negative leg)
console.log(triangle(-3, "leg", 4, "leg"));

// Test Cases for invalid input (negative angle)
console.log(triangle(3, "angle", -45, "opposite angle"));

// Test Cases for invalid input (hypotenuse smaller than leg)
console.log(triangle(5, "hypotenuse", 6, "leg"));

// Test Cases for invalid input (invalid type)
console.log(triangle(3, "invalid", 4, "leg"));

// Test Cases for invalid input (two hypotenuse)
console.log(triangle(5, "hypotenuse", 4, "hypotenuse"));

// Test Cases for leg-leg scenario with large values
console.log(triangle(1000, "leg", 2000, "leg"));

// Test Cases for hypotenuse-angle scenario with large values
console.log(triangle(1500, "hypotenuse", 75, "angle"));

// Test Cases for adjacent angle-leg scenario with large values
console.log(triangle(80, "adjacent angle", 1200, "leg"));

// Test Cases for opposite angle-hypotenuse scenario with large values
console.log(triangle(85, "opposite angle", 2500, "hypotenuse"));
