class EventEmitter {
    constructor() {
        this.events = Object.create(null);
    }
    
    subscribe(eventName, callback) {
        (this.events[eventName] || (this.events[eventName] = [])).push(callback);
        
        return {
            unsubscribe: () => {
                const arr = this.events[eventName];
                if (arr) {
                    const index = arr.indexOf(callback);
                    if (index > -1) arr.splice(index, 1);
                }
            }
        };
    }
    
    emit(eventName, args = []) {
        const arr = this.events[eventName];
        if (!arr || arr.length === 0) return [];
        
        const res = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            res[i] = arr[i](...args);
        }
        return res;
    }
}
