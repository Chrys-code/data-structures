function selectionsort(arr) {
    // select index
    for (var i = 0; i < arr.length; i++) {
        //set as lowest
        var lowest = i;
        //find lower
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        //if lower found, swap
        if (i !== lowest) {
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

console.log(
    selectionsort([2, 6, 3, 10, 8])
)