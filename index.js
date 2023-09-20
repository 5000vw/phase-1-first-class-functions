
function receivesAFunction(a){
  return a();
}
receivesAFunction(function(){return "i am the best software developer"})


function add(){
 console.log("anything")
}
function returnsANamedFunction(fn) {
  function fn (){
console.log("Times up")
  }
  return fn;
}



function returnsAnAnonymousFunction(){
  return function(){
    
  }
}
