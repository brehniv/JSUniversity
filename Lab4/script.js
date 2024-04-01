let unsortedArray = [
    3,
    1,
    5,
    2,
    4,
    undefined,
    7,
    undefined,
    6,
    1,
    2,
    31,
    24,
    12,
    231,
];
console.log("Unsorted array:", unsortedArray);
console.log(
    "Exchange sorted array:",
    SortingLibrary.bubbleSort(unsortedArray, "asc")
);
console.log(
    "Min element sorted array:",
    SortingLibrary.minElementSort([...unsortedArray], "asc")
);
console.log(
    "Insertion sorted array:",
    SortingLibrary.insertionSort([...unsortedArray], "asc")
);
console.log(
    "Shell sorted array:",
    SortingLibrary.shellSort([...unsortedArray], "asc")
);
console.log(
    "Quick sorted array:",
    SortingLibrary.quickSort([...unsortedArray], "asc")
);
