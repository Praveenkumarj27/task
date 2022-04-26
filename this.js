var student={
   firstname:"praveen",
    lastname:"kumar",
    fullname:function (age){
        //return this.firstname + " " + this.lastname;
        return `${this.firstname} ${this.lastname}`
    }
};
console.log(student.fullname()) ;     //this refers to context (student)



var student2={
    firstname:"karthick",
    lastname:"raja",
    fullname:student.fullname,
};
console.log(student2.fullname());


var printFullName = function(age){
    return `${this.firstname} ${this.lastname} age is ${age}`
};
console.log(printFullName());
//Manually providing (explicity) context:-

//  1.call
//  2.apply
//  3.bind

// call
 console.log(printFullName.call(student,45))

  //apply

 console.log(printFullName.apply(student2,[34]))




