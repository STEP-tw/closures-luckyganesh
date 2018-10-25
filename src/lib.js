const makeConstant = function(element){
  return function(){
    return element;
  };
};

const makeCounterFromN = function(number){
  return function(){
    return number++;
  };
};

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
};


const makeDeltaTracker = function(startNumber){
  let old = startNumber;
  return function(delta = 0){
    return {old,
      delta,
      new:(old = old + delta)
    };
  }
}

const makeFiboGenerator = function(firstNum,secondNum){
  if(!secondNum && !firstNum){
    firstNum = 0;
    secondNum = 1;
  }
  if(!secondNum){
    secondNum = firstNum;
    firstNum = 0;
  }
  return function(){
    let fibo = firstNum;
    let sum = firstNum+secondNum;
    firstNum = secondNum;
    secondNum = sum;
    return fibo;
  }
}

const identity = function(element){return element};

const makeCycler = function(elements){
  let counter = 0;
  let array = [];
  array = elements.map(identity);
  return function(){
    return array[(counter++) % array.length];
  }
}

const curry = function(func,element){
  return function(value1,value2){
    return func(element,value1,value2);
  }
}

const compose = function(function1,function2){
  return function(value1,value2){
    return function1(function2(value1,value2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
