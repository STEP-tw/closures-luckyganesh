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
const makeFiboGenerator = undefined;
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
