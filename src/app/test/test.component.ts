import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:  
    `<h2>
    Welcome to Test Component, Ashish! <!--//static template  // No data binding here-->
    <!--//dynamic template  // Data binding here-->
    <!--//we will use interpolation syntax {{}} for data binding-->
    <!--//we will bind variable name to template using {{name}}-->
    <!--//this will display value of name variable in template-->
    <!--//so we need to declare and initialize name variable in component class-->
    <!--//let's do that in TestComponent class-->
    <!--//after that, we can use {{name}} in template for data binding-->
    <!--//this is one-way data binding from component to template-->
    <!--//now, let's update the template to use {{name}} for data binding-->  
    <br>
   Welcome to Test Component, {{name}}! <!--//This expression {{}} is interpolation syntax for data binding in Angular -->
    </h2>
    <h2>2+2={{2+2}}</h2>  <!--//angular can evaluate expressions inside {{}} and bind the result to template-->
    <h2>{{"Welcome "+name}}</h2> <!--//{{}} can also concatenate strings-->

    <!--//next example is using javascript properties and methods within curly braces {{}}-->
    <h2>{{name.length}}</h2> <!--//name.length gives length of string stored in name variable-->
    <h2>{{name.toUpperCase()}}</h2> <!--//name.toUpperCase() converts string to uppercase-->
    <h2>{{name.toLowerCase()}}</h2> <!--//name.toLowerCase() converts string to lowercase-->
    <h2>{{name.charAt(0)}}</h2> <!--//name.charAt(0) gives first character of string-->
    <h2>{{name.indexOf('s')}}</h2> <!--//name.indexOf('s') gives index of first occurrence of 's' in string-->
    <h2>{{name.split('')}}</h2> <!--//name.split('') splits string into array of characters-->  
    //apart from javascript method we can call custom methods defined in component class
    <h2>{{greetUser()}}</h2> <!--//calling custom method greetUser() defined in component class-->
    <!--//this will display return value of greetUser() method in template-->
    <!--//let's define greetUser() method in TestComponent class-->
    <!--//after that, we can use {{greetUser()}} in template for data binding-->
    <!--//this is another example of one-way data binding from component to template--> 

    <!--<h2>{{windows.location.href}}</h2> --> <!--//We can not access javascript global variables directly in {{}}
    //because Angular does not allow access to global variables for security reasons
    //we can create a variable in component class and assign global variable value to it
    //then we can use that variable in {{}} for data binding
    //let's do that in TestComponent class-->
    <h2>{{currentUrl}}</h2>

    `,
    
  styles: []
})
export class TestComponent implements OnInit {
//interface OnInit:A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive (structural directives *ngIf or *ngFor,attribute directives ngClass or ngStyl, component directives). Define an ngOnInit() method to handle any additional initialization tasks.
 
//variable declaration and initialization in TypeScript
//name: string = 'Ashish';  //declaring variable name of type string and initializing it with value 'Ashish'//this is one way of declaring and initializing variable.//shortcut way//more concise way//less boilerplate code//more readable way//more maintainable way//more efficient way//more TypeScript way//more Angular way
//name: string;//old way of declaring variable//then initializing it in constructor//less preferred way//more verbose way
//constructor() {
//this.name = "Ashish";//initializing variable inside constructor
//}
//shortcut for declaring and initializing variable
//public name: string = "Ashish";//
//private name: string = "Ashish";//
//protected name: string = "Ashish";//

public name = "Ashish Shukla";//type inference means automatically detects type of variable based on value assigned
//no need to mention type explicitly
//typeScript is smart enough to detect type based on value assigned
//if we try to assign value of different type, it will give error
//public name: string = 25;//error
//public name = 25;//error
//because name is inferred as string type
////Ok so which one is recommended for me as i have assigned string value to name variable
//public name: string = "Ashish";//recommended
//this makes it clear that name is of type string
//and helps in code readability and maintainability
//but both ways are valid and work fine
//it is a matter of preference and coding style
//end of discussion on variable declaration and initialization
//now, let's discuss let and const keywords
//we can also use let and const keywords to declare variables
//let is used for block scope variables
//const is used for constant variables that cannot be reassigned
//we generally use let for variables that will change value
//and const for variables that will not change value
//example:
//let name = "Ashish";//block scope variable
//name = "New Name";//allowed
//const name = "Ashish";//constant variable, cannot be reassigned
//name = "New Name";//error
//but we can change properties of object declared with const
//const person = { name: "Ashish", age: 30 };
//person.age = 31;//allowed 
//person.name = "New Name";//allowed
//person = { name: "New Name", age: 25 };//error//why because we are trying to reassign the constant variable
//so, const variable cannot be reassigned to new value
//but properties of object declared with const can be changed
//this is useful for declaring configuration objects or constants
//that should not be reassigned but their properties can be modified
//end of discussion on let and const keywords
//in functions, we generally use let and const keywords
//but in class, we generally use public, private, protected keywords
//to declare variables
//we can also use access modifiers in constructor parameters
//constructor(public name: string) { }
//this will create a public variable name and initialize it with value passed to constructor
//we can also use default parameters in constructor
//constructor(public name: string = "Ashish") { }
//if no value is passed to constructor, it will use default value 
//"Ashish"
//we can also use optional parameters in constructor
//constructor(public name?: string) { }
//if no value is passed to constructor, it will be undefined
//we can also use rest parameters(remaining parameters) in constructor means  
//we can pass multiple names to constructor//varargs. if we pass multiple names, they will be stored in names array. this is useful when we don't know how many parameters will be passed.
//constructor(public ...names: string[]) { }
//this will create an array of names
//we can access names array using this.names
//we can also use destructuring in constructor parameters //means extracting values from objects or arrays  
//constructor(public {name, age}: {name: string, age: number}) { }
//this will create public variables name and age
//we can access them using this.name and this.age 
//we can also use interfaces in constructor parameters
//interface Person {
//name: string;
//age: number;
//}
//constructor(public person: Person) { }
//this will create public variable person of type Person
//we can access name and age using this.person.name and this.person.age   
//we can also use generics in constructor parameters
//constructor<T>(public data: T) { }
//this will create public variable data of type T
//we can access data using this.data  
//we can also use union types in constructor parameters
//constructor(public data: string | number) { }
//this will create public variable data of type string or number
//we can access data using this.data  
//we can also use intersection types in constructor parameters
//interface A {
//a: string;
//}
//interface B {
//b: number;
//}
//constructor(public data: A & B) { }
//this will create public variable data of type A and B
//we can access a and b using this.data.a and this.data.b   
//we can also use type aliases in constructor parameters
//type Person = {
//name: string;
//age: number;
//}
//constructor(public person: Person) { }
//this will create public variable person of type Person
//we can access name and age using this.person.name and this.person.age     
//we can also use enums in constructor parameters
//enum Color {
//Red,
//Green,
//Blue
//}
//constructor(public color: Color) { }
//this will create public variable color of type Color
//we can access color using this.color  
//we can also use tuples in constructor parameters
//constructor(public data: [string, number]) { }
//this will create public variable data of type [string, number]
//we can access data using this.data[0] and this.data[1]  
//we can also use any type in constructor parameters
//constructor(public data: any) { }
//this will create public variable data of type any
//we can access data using this.data
//but using any type is not recommended
//as it defeats the purpose of type safety in TypeScript
//it is better to use specific types whenever possible
//this helps in catching errors at compile time rather than runtime
//it also improves code readability and maintainability
//so, use any type only when absolutely necessary
//and prefer specific types whenever possible
//this will help in writing better TypeScript code
//and leveraging the benefits of static typing
//provided by TypeScript language
//happy coding!
//end of discussion on variable declaration and initialization in TypeScript  
//now, back to our TestComponent class
//we have declared a public variable name and initialized it with "Ashish"
//now, we can use this variable in our template for data binding
//using interpolation syntax {{}} to bind variable to template
//this will display "Welcome to Test Component, Ashish!" in the template
//when we run the application
//this is an example of one-way data binding from component to template
//now, let's complete the class with ngOnInit lifecycle hook
//to implement OnInit interface
//this is optional but a good practice
//to keep our component lifecycle methods organized
//ngOnInit is called once the component is initialized
//we can perform any initialization logic here
//like fetching data from server or setting up default values
//for our component properties
//for now, we will leave it empty
//but in real applications, we would add our initialization logic here
//ngOnInit() {
//  }

public currentUrl = window.location.href;//assigning global variable value of javascript to component variable for data binding in template

  constructor() { } //constructor method //called when component is created

  
ngOnInit() {//lifecycle hook method
  //called once component is initialized
  //we can add initialization logic here if needed
  //for now, it is empty
  //end of ngOnInit method
  //end of TestComponent class
  //end of file
  //end of discussion
  //end of explanation
  //end of code
  //end of everything
  }

  greetUser() {
    //throw new Error('Method not implemented.');
    return "Hello " + this.name + ", welcome to Angular!";//returning greeting message using name variable
}
}
