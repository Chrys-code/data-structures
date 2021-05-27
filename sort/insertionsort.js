function insertionsort(arr) {
    //pick index 1 
    for (var i = 1; i < arr.length; i++) {
        //set as current
        var current = arr[i]

        //loop backward until a number is smaller
        for (var j = i - 1; i >= 0 && arr[j] > current; j--) {
            //make space by increasing indexes
            arr[j + 1] = arr[j]
        }
        // insert into new place
        arr[j + 1] = current
    }
    return arr
}

console.log(
    insertionsort([2, 6, 3, 10, 8])
)