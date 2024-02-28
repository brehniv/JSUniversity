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
    if (
        (type1 === "hypotenuse" && type2 === "leg") ||
        (type1 === "leg" && type2 === "hypotenuse")
    ) {
        if (value1 === value2) {
            return "failed: hypotenuse cannot be equal to leg";
        }
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
                        c = a / Math.sin(beta * (Math.PI / 180));
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
    console.log(
        `a = ${round2(a)}\nb = ${round2(b)}\nc = ${round2(c)}\nalpha = ${round2(
            alpha
        )}°\nbeta = ${round2(beta)}°`
    );
    return "success";
}
console.log(triangle(3, "leg", 4, "leg")); // success
console.log(triangle(5, "leg", 13, "hypotenuse")); // success
console.log(triangle(30, "angle", 5, "hypotenuse")); // success
console.log(triangle(40, "opposite angle", 8, "leg")); // success
console.log(triangle(20, "adjacent angle", 10, "leg")); // success
console.log(triangle(25, "hypotenuse", 15, "leg")); // success
console.log(triangle(60, "angle", 7, "hypotenuse")); // success
console.log(triangle(70, "opposite angle", 9, "hypotenuse")); // success
console.log(triangle(45, "adjacent angle", 12, "leg")); // success
console.log(triangle(90, "leg", 8, "hypotenuse")); // success
console.log(triangle(50, "angle", 6, "hypotenuse")); // success
console.log(triangle(75, "opposite angle", 11, "leg")); // success
console.log(triangle(80, "adjacent angle", 14, "leg")); // success
console.log(triangle(15, "hypotenuse", 17, "leg")); // success
console.log(triangle(70, "angle", 8, "hypotenuse")); // success
console.log(triangle(35, "opposite angle", 6, "hypotenuse")); // success
console.log(triangle(55, "adjacent angle", 9, "leg")); // success
console.log(triangle(20, "leg", 21, "hypotenuse")); // success
console.log(triangle(75, "angle", 11, "hypotenuse")); // success
console.log(triangle(48, "opposite angle", 10, "leg")); // success
console.log(triangle(62, "adjacent angle", 13, "leg")); // success
