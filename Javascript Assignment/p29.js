function myfunction(){
    console.log(arguments.callee.name);
}

myfunction();