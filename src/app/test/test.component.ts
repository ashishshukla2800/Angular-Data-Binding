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



    <!--//property binding example (feature-branch-propertyBinding in git)-->

    <!--//property binding is used to bind properties of HTML elements to component variables-->
    <!--//we use square brackets [] for property binding-->
    <!--//let's see an example of property binding--><!--but before that we need to understand difference between attribute and property of HTML elements
    <!--//attribute is defined in HTML markup and is static--> <!--//$0.getAttribute('value')--> <!--//for example, value attribute of input element is static-->
    <!--//it does not change even if user types something in input field-->
    <!--//but property is defined in DOM(Documnet Object Model) and is dynamic--> <!--//$0.value --> <!--//for example, value property of input element is dynamic-->
    <!--//it changes as user types something in input field-->
    <!--//what is DOM? Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.-->
    <!--//DOM is created by browser when HTML page is loaded//it is a tree-like structure representing HTML elements as objects such as tags, attributes, text, etc.//we can access and manipulate DOM using JavaScript//for example, we can get value of input element using JavaScript//using getAttribute() method to get attribute value//using value property to get current value//
    <!--//DOM is dynamic and changes as user interacts with page//for example, when user types something in input field, value property of input element changes accordingly
    <!--//example of DOM propeties are value, innerHTML, style, className, etc.//we can access and modify these properties using JavaScript
    <!--//for example, we can change innerHTML of a div element using JavaScript//we can also add event listeners to DOM elements using JavaScript//for example, we can add click event listener to a button element using JavaScript//this allows us to create interactive web pages
    <!--//end of discussion on DOM
    
    <!--//what is HTML attribute? An HTML attribute is a modifier of an HTML element that provides additional information about the element. Attributes are always included in the opening tag of an element and usually come in name/value pairs like name="value".--> 
    <!--//example of HTML attributes are id, class, src, href, alt, title, etc.//we can access these attributes using JavaScript//using getAttribute() and setAttribute() methods
    <!--//for example, we can get id attribute of a div element using getAttribute('id') method//we can also set class attribute of a div element using setAttribute('class', 'newClass') method
    <!--//HTML attributes are static and do not change as user interacts with page//for example, if we set value attribute of input element to "myName", it will always remain "myName" regardless of what user types in input field
    <!--//end of discussion on HTML attributes
    <!--//to summarize, HTML attributes are static and defined in HTML markup//DOM properties are dynamic and defined in DOM tree created by browser//we can access and manipulate both using JavaScript-->
    
    <!--//may i know coressponding DOM properties of HTML attributes?-->
    <!--//here are some common HTML attributes and their corresponding DOM properties-->
    <!--//id attribute corresponds to id property-->
    <!--//class attribute corresponds to className property-->
    <!--//src attribute corresponds to src property-->
    <!--//href attribute corresponds to href property-->
    <!--//alt attribute corresponds to alt property-->
    <!--//title attribute corresponds to title property-->
    <!--//value attribute corresponds to value property-->
    <!--//innerHTML attribute corresponds to innerHTML property-->
    <!--//style attribute corresponds to style property-->
    <!--//we can access these properties using JavaScript-->
    <!--//for example, we can get id property of a div element using element.id-->
    <!--//we can also set className property of a div element using element.className = 'newClass'-->
    <!--//end of discussion on HTML attributes and DOM properties--><!--//so both are same? as i can see they have same names?-->
    <!--//not exactly same//HTML attributes are defined in HTML markup and are static//DOM properties are defined in DOM tree created by browser and are dynamic//they may have same names but they are different concepts//for example, value attribute of input element is static and does not change as user types something in input field//but value property of input element is dynamic and changes as user types something in input field-->
    <!--//so we have a DOM corresponding to each HTML attribute?-->
    <!--//yes, most HTML attributes have corresponding DOM properties//but not all attributes have corresponding properties//for example, data-* attributes do not have corresponding properties//also, some properties may not have corresponding attributes//for example, innerHTML property does not have corresponding attribute//it is used to get or set HTML content of an element//but there is no innerHTML attribute in HTML markup-->
    <!--//end of discussion on HTML attributes and DOM properties correspondence-->   

    <!--//in Angular, property binding is used to bind DOM properties to component variables//we use square brackets [] for property binding-->
   
    <!--//property binding in angular is actually binding to properties of DOM elements not HTML attributes-->
   
    <!--//now, let's see example of property binding in Angular-->
    
    <!--//for example, to bind value property of input element to component variable-->
    <!--//we use property binding syntax [value]="name"-->
    <input type="text" [value]="name"/> <!--//property binding  -->
    <!--//here, we are binding value property of input element to name variable defined in component class-->
    <!--//so, input field will display value of name variable-->
    <!--//if we change value of name variable in component class-->
    <!--//input field will automatically update to reflect new value-->
    <!--//this is one-way data binding from component to template using property binding-->
    
    <!--//property is defined in DOM(Documnet Object Model) and is dynamic--> 
    <!--//so value property of input element is dynamic-->
    <!--//it changes as user types something in input field-->
    <!--//so, value property gives current value of input element  -->
    <!-- $0.value <!--// (check in console)-->
    
    
    <!--//now, let's see another example of property binding-->   
    <!--<input type="text" value="myName"/> --><!--//property binding  --><!--//static value attribute
    <!--//here, we are setting static value attribute of input element to "myName"-->
    <!--//so, input field will always display "myName" regardless of component variable values-->
    <!--//this is not data binding, just static attribute setting--> 
    <!--//value attribute gives initial value of input element, so, value attribute is used just to initialize the HTML input element-->  
    <!--//value attribute of input element is static-->
    <!--//it does not change even if user types something in input field-->
    <!-- $0.getAttribute('value') //(uncommit <input type="text" value="myName"/> and check in console)-->

   
    <!--//so, to summarize, HTML attributes are static and defined in HTML markup//DOM properties are dynamic and defined in DOM tree created by browser//we can access and manipulate both using JavaScript-->
    <!--//end of discussion on DOM properties and HTML attributes-->

    <!--//property binding in angular is actually binding to properties of DOM elements not HTML attributes-->
    <!--//so, when we do [value]="name", we are actually binding to value property of input element-->
    <!--//not value attribute-->
    <!--//this is important distinction to understand when working with property binding in Angular-->
    <!--//end of property binding discussion-->

    <input [id]="myId" type="text" [value]="name"/> <!--//Another example of property binding--!>
    <!--//binding id property of input element to myId variable defined in component class-->
    <!--//here, we are binding id property of input element to myId variable defined in component class-->
    <!--//so, input element will have id attribute set to value of myId variable defined in component class-->
    <!--//this is another example of one-way data binding from component to template using property binding-->

     <input bind-id="myId" type="text" [value]="name"/> //  <!--//Another way of writing property binding using bind- prefix-->
    <!--//both [id]="myId" and bind-id="myId" are equivalent-->
    <!--//they both bind id property of input element to myId variable defined in component class-->
    <!--//this is just different syntax for property binding in Angular-->
    <!--//end of property binding examples--> 
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
public myId = "testId";
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
