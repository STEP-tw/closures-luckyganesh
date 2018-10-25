const makeConstant = function(element){
  return function(){
    return element;
  }
};
const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
};
const makeCounterFromZero = undefined /*function(){
  return makeCounterFromN(0);
}
*/
const makeDeltaTracker = undefined;
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
