class mySet {
    constructor() {
        this.collection = []
        this.size = null
    }

    has(value) {
        return (this.collection.indexOf(value) !== -1)
    }

    values() {
        return this.collection
    }

    add(value) {
        if (!this.has(value)) {
            this.collection.push(value)
            this.size++
            return true
        }
        return false
    }

    remove(value) {
        if (this.has(value)) {
            this.collection.splice(this.collection.indexOf(value), 1)
            this.size--
            return true
        }
        return false
    }

    // Additional methods (over ES6) //
    union(guestSet) {
        let hostValues = this.values()
        let guestValues = guestSet.values()
        let uniSet = new mySet()
        hostValues.forEach(item => {
            uniSet.add(item)
        })
        guestValues.forEach(item => {
            uniSet.add(item)
        })
        return uniSet
    }

    intersection(guestSet) {
        let hostSet = this.values()
        let interSet = new mySet()

        hostSet.forEach(item => {
            if (guestSet.has(item)) {
                interSet.add(item)
            }
        })
        return interSet
    }

    // Left outter only
    difference(guestSet) {
        let hostSet = this.values()
        let diffSet = new mySet()

        hostSet.forEach(item => {
            if (!guestSet.has(item)) {
                diffSet.add(item)
            }
        })
        return diffSet
    }

    subset(guestSet) {
        let hostSet = this.values()
        return hostSet.every(value => {
            return guestSet.has(value)
        })
    }
}

const myset1 = new mySet()
const myset2 = new mySet()

myset1.add(1)
myset1.add(2)
myset1.add(3)
myset1.add(4)
myset1.add(5)

myset2.add(2)
myset2.add(3)
myset2.add(4)
myset2.add(7)

console.log(
    myset1.union(myset2),
    myset1.intersection(myset2),
    myset1.difference(myset2),
    myset1.subset(myset2),
)



