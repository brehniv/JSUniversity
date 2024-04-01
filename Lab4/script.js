const arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 1000));
}
const arr2 = [];
for (let i = 0; i < 100; i++) {
    arr2.push(Math.floor(Math.random() * 1000));
    if (arr2[i] % 2 == 0) {
        arr2[i] = undefined;
    }
}
console.log("Unsorted sparse array:", arr2);
console.log("Exchange sorted array:", SortingLibrary.bubbleSort(arr2, "asc"));
console.log(
    "Min element sorted array:",
    SortingLibrary.minElementSort([...arr2], "asc")
);
console.log(
    "Insertion sorted array:",
    SortingLibrary.insertionSort([...arr2], "asc")
);
console.log("Shell sorted array:", SortingLibrary.shellSort([...arr2], "asc"));
console.log("Quick sorted array:", SortingLibrary.quickSort([...arr2], "asc"));

console.log(("-".repeat(30) + "\n").repeat(3));
console.log("Unsorted array:", arr);
console.log(
    "Exchange sorted array:",
    SortingLibrary.bubbleSort([...arr], "asc")
);
console.log(
    "Min element sorted array:",
    SortingLibrary.minElementSort([...arr], "asc")
);
console.log(
    "Insertion sorted array:",
    SortingLibrary.insertionSort([...arr], "asc")
);
console.log("Shell sorted array:", SortingLibrary.shellSort([...arr], "asc"));
console.log("Quick sorted array:", SortingLibrary.quickSort([...arr], "asc"));
