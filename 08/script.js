let script=document.createElement('script');

let cdn ="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
script.src = cdn;

let version = script.src.split('/')[6];
console.log(version);
//console.log(script);
