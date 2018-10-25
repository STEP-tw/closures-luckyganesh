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
const makeCycler = function(elements){
  let counter = 0;
  let array = [];
  array = elements.map(function(element){
    return element;
  });
  const length =array.length;
  return function(){
    if(counter == length){
      counter = 0;
    }
    return array[counter++];
  }
}
const curry = function(functionToDo,element){
  return function(value1,value2){
    return functionToDo(element,value1,value2);
  }
}

const compose = function(function1,function2){
  return function(value1,value2){
    if(!value2){ 
      return function1(function2(value1));
    }
    return function2(function1(value1),function1(value2));
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
