var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let timeToArrive = arrivalTime + delayedTime;
    if (timeToArrive < 24) {
        return timeToArrive;
    } else if (timeToArrive === 24) {
        return 0;
    } else {
        return timeToArrive - 24;
    }
};
