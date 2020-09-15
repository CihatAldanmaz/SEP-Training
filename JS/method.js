// Map Function  
Array.prototype.myMap = function(callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      let newMappedItem = callback(this[i], i, this)
      output.push(newMappedItem)
    }
    return output;
  }
 const arr = [5, 12, 3];
  
// console.log(
// arr.myMap((val, index, array) => {
// return val * 2;
// })
// );

  
//Filter
  Array.prototype.myFilter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        output.push(this[i]);
      }
    }
    return output;
  };
  
  
  // console.log(
  //   arr.myFilter((val, index, array) => {
  //     return val < 3;
  //   })
  // );
  
  //Find
  Array.prototype.myFind = function (callback)
   {
    let resukt;
    for (let i = 0; i < this.length; i++) {
        let isFound = callback(this[i], i, this)
        if(isFound){
            result = this[i]
            break //stop the loop if find that item
          }
        }
        return result
      }
      
  // console.log(
  //   arr.myFind((val, index, array) => {
  //     return val === 2;
  //   })
  // );
  
  //Reduce
  Array.prototype.myReduce = function(callback, initialValue)
  {
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
  }
