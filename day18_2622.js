var TimeLimitedCache = function() {
    this.cache = new Map(); 
    this.timers = new Map(); 
};

/** 
 
 * @param {number} key
 * @param {number} value
 * @param {number} duration -
 * @return {boolean} - 
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
 
    const exists = this.cache.has(key);
    
   
    if (exists) {
        clearTimeout(this.timers.get(key));
    }
    
    // Set the new value
    this.cache.set(key, value);
    
    //  auto-expiration timer
    const timerId = setTimeout(() => {
        this.cache.delete(key);
        this.timers.delete(key);
    }, duration);
    
    //  timer ID
    this.timers.set(key, timerId);
    
    // Return true 
    return exists;
};

/** 
 * Get value associated with key
 * @param {number} key
 * @return {number} - value if key exists and not expired, -1 otherwise
 */
TimeLimitedCache.prototype.get = function(key) {
    // If key exists, return its value
    if (this.cache.has(key)) {
        return this.cache.get(key);
    }
    // Otherwise return -1
    return -1;
};

/** 
 * Count non-expired keys
 * @return {number} - count of active (non-expired) keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};