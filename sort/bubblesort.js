function bubblesort(array) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[i]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(
    bubblesort([2, 6, 3, 10, 8])
)