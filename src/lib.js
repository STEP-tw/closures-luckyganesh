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
  let deltaTracker = {old :"" ,delta : "" , "new" : startNumber};
  return function(number){
    let {old,delta} = deltaTracker;
    delta = number;
    if(number == undefined){
      delta = 0;
    }
    old = deltaTracker["new"];
    deltaTracker = {old,delta};
    deltaTracker["new"] = old+delta;
    return deltaTracker;
  }
}
const makeFiboGenerator = function(number1,number2){
  let fibo = [0,1]
  if(number2 == undefined && number1){
    fibo[1] = number1;
  }
  if(number1 && number2){
    fibo[0] = number1;
    fibo[1] = number2;
  }
  let counter = 0;
  return function(){
    if(counter == 0 || counter == 1){
      return fibo[counter++];
    }
    fibo[counter] = fibo[counter-1]+fibo[counter-2];
    return fibo[counter++];
  }
}
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
