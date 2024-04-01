const SortingLibrary = (() => {
    const removeUndefined = (arr) => {
        return arr.filter((element) => element !== undefined);
    };
    const swap = function (arr, first, second) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    };
    function bubbleSort(arr, order = "asc") {
        let comparisons = 0;
        let swaps = 0;
        const cleared = removeUndefined(arr);
        const len = cleared.length;
        let removedUndf = arr.length - len;
        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                comparisons++;
                if (
                    order === "asc"
                        ? cleared[i] > cleared[j]
                        : cleared[i] < cleared[j]
                ) {
                    swap(cleared, i, j);
                    swaps++;
                }
            }
        }
        console.log(
            `Bubble sort: comparisons - ${comparisons}, swaps - ${swaps}, removed undefined - ${removedUndf}`
        );
        return cleared;
    }

    function minElementSort(arr, order = "asc") {
        let comparisons = 0;
        let swaps = 0;
        const cleared = removeUndefined(arr);
        const len = cleared.length;
        let removedUndf = arr.length - len;
        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
                comparisons++;
                if (
                    order === "asc"
                        ? cleared[j] < cleared[minIndex]
                        : cleared[j] > cleared[minIndex]
                )
                    minIndex = j;
            }
            if (minIndex !== i) {
                const temp = cleared[i];
                swap(cleared, i, minIndex);
                swaps++;
            }
        }
        console.log(
            `Min element sort: comparisons - ${comparisons}, swaps - ${swaps}, removed undefined - ${removedUndf}`
        );
        return cleared;
    }

    function insertionSort(arr, order = "asc") {
        let comparisons = 0;
        let swaps = 0;
        const cleared = removeUndefined(arr);
        const len = cleared.length;
        let removedUndf = arr.length - len;
        for (let i = 1; i < len; i++) {
            const key = cleared[i];
            let j = i - 1;
            comparisons++;
            while (
                j >= 0 &&
                ((order === "asc" && cleared[j] > key) ||
                    (order === "desc" && cleared[j] < key))
            ) {
                comparisons++;
                cleared[j + 1] = cleared[j];
                j = j - 1;
                swaps++;
            }
            cleared[j + 1] = key;
        }
        console.log(
            `Insertion sort: comparisons - ${comparisons}, swaps - ${swaps}, removed undefined - ${removedUndf}`
        );
        return cleared;
    }

    function shellSort(arr, order = "asc") {
        let comparisons = 0;
        let swaps = 0;
        const cleared = removeUndefined(arr);
        const len = cleared.length;
        let removedUndf = arr.length - len;
        for (
            let gap = Math.floor(len / 2);
            gap > 0;
            gap = Math.floor(gap / 2)
        ) {
            for (let i = gap; i < len; i++) {
                const temp = cleared[i];
                let j = i;
                comparisons++;
                while (
                    j >= gap &&
                    ((order === "asc" && cleared[j - gap] > temp) ||
                        (order === "desc" && cleared[j - gap] < temp))
                ) {
                    cleared[j] = cleared[j - gap];
                    j -= gap;
                    swaps++;
                }
                cleared[j] = temp;
            }
        }
        console.log(
            `Shell sort: comparisons - ${comparisons}, swaps - ${swaps}, removed undefined - ${removedUndf}`
        );
        return cleared;
    }

    function quickSort(arr, order = "asc") {
        let comparisons = 0;
        let swaps = 0;
        const cleared = removeUndefined(arr);
        const len = cleared.length;
        let removedUndf = arr.length - len;

        const partition = (arr, low, high) => {
            let pivot = arr[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                comparisons++;
                if (order === "asc" ? arr[j] < pivot : arr[j] > pivot) {
                    i++;
                    swap(arr, i, j);
                    swaps++;
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        };

        function quickSortUtil(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                quickSortUtil(arr, low, pi - 1);
                quickSortUtil(arr, pi + 1, high);
            }
        }

        quickSortUtil(cleared, 0, cleared.length - 1);

        console.log(
            `Quick sort: comparisons - ${comparisons}, swaps - ${swaps}, removed undefined - ${removedUndf}`
        );
        return cleared;
    }

    return {
        bubbleSort: bubbleSort,
        minElementSort: minElementSort,
        insertionSort: insertionSort,
        shellSort: shellSort,
        quickSort: quickSort,
    };
})();
