//global variable
var number = 2;

//global function (class =  group of functions and objects)
function allOperations(x) {

    //global variable  for functions bellow but local for the parent function
    var z = 0;

    //local function
    function duplicate(a) {
        //local variable
        var b = a * 2;
        return b;
    }

    function triplicate(c) {
        var d = c * 3;
        return d;
    }

    //global function to the duplicateSquare function
    function square(e) {
        var f = e * e;
        return f;
    }

    function duplicateSquare(g) {
        var h = 2 * square(g);
        return h;
    }
    //duplicate( square(x) );

    //local and global variable

    //calling functions inside other functions
    var potato = triplicate(3);
    var tomato = duplicate(potato);
    //that is the same with the line bellow
    var orange = duplicate(triplicate(3));

    z = duplicate(triplicate(square(duplicateSquare(x))));

    return z;
}

alert(allOperations(number));
//not working
//alert( allOperations.duplicate( number ) ) ;


//declaring objects

var myNeighbors = {
    firstName: "John",
    lastName: "Doe",
    age: 49,
    constructFullNameAndAge: function () {
        constructor = "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old";
        return constructor;
    },
    birthdayGreeting: function () {
        birthdayLetter = "Dear " + this.firstName + " " + this.lastName + ", I would like to whish you a Happy Birthday and all the best on your " + this.age + "th aniversary.";
        return birthdayLetter;
    }
}

alert(myNeighbors.firstName); //return John
alert(myNeighbors.constructFullNameAndAge());
alert(myNeighbors.birthdayGreeting());
