(() => {
    console.log("-".repeat(50));
    console.log("Say goodbye all start with J or j, say hello other");
    console.log("-".repeat(50));

    const names = [
        "Bill",
        "John",
        "john",
        "Jen",
        "Jason",
        "Paul",
        "Frank",
        "Steven",
        "Larry",
        "Paula",
        "Laura",
        "Jim",
    ];

    for (let name of names) {
        if (name.startsWith("J") || name.startsWith("j")) {
            SpeakGoodBye.speak(name);
        } else {
            SpeakHello.speak(name);
        }
    }

    console.log(
        "\nIf you name start with lower letter - goodbye. Other welcome"
    );
    for (let name of names) {
        if (name.length != 0 && name[0] === name[0].toUpperCase()) {
            SpeakHello.speak(name);
        } else {
            SpeakGoodBye.speak(name);
        }
    }
})();
