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
    console.log(
        `a = ${round2(a)}\nb = ${round2(b)}\nc = ${round2(c)}\nalpha = ${round2(
            alpha
        )}°\nbeta = ${round2(beta)}°`
    );
    return "success";
}
