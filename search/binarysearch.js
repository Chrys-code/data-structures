function bs(arr, el) {
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2)

    while (arr[middle] !== el && start <= end) {
        if (el < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] == el ? middle : -1
}

// [2,4,6,8,9,11,12,14,16]
//  s       m           e  

// If el < middle
// start as:
// [2,4,6,8,9,11,12,14,16]
//  s m   e             

// If el > middle
// start as:
// [2,4,6,8,9,11,12,14,16]
//            s  m     e


console.log(bs([2, 4, 6, 8, 9, 11, 12, 14, 16], 11))