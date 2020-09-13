// primitive data type
// string
// number
// boolean
// undefined
// null

// console.log(typeof null); // object

// var a = 5;

// function foo(input) { // pass a primitive data by value
//   input = 6;
//   console.log(input);
// }

// foo(a)
// console.log(a);

// // coercion
// const res = true + false
// console.log(res);


//          var       | let   | const
// scope :  fucntion    block   block
// hoist:   true        no      no


function foo() {
  console.log(a);
  let a = 5;
}


foo();