/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // If the array is empty, return -1
    if (this.length === 0) {
        return -1;
    }
    // Otherwise, return the last element
    return this[this.length - 1];
};