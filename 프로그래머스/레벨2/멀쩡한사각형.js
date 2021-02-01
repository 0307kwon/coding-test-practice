function solution(w, h) {
    var answer = 1;
    const initialPoint = w;
    let awayFromInitialPoint;
    let squareNumberCantMake = 0;
    let minW;
    let minH;
    for(let i=1; i < h + 1; i++) {
        awayFromInitialPoint = w / h * i;
        if(Number.isInteger(awayFromInitialPoint)) {
            minW = awayFromInitialPoint;
            minH = i;
            squareNumberCantMake += Math.floor(awayFromInitialPoint);
            break;
        }
        squareNumberCantMake += 1 + Math.floor(awayFromInitialPoint);
    }

    squareNumberCantMake = 
        squareNumberCantMake - ((minH * minW) - squareNumberCantMake);

    squareNumberCantMake = h * squareNumberCantMake / minH;
    answer = h * w - squareNumberCantMake;
    
    return answer;
}