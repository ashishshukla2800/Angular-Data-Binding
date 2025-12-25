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


    <!--//Now, we have seen one-way data binding from component to template using interpolation syntax-->
    <!--//sometimes we want data binding from template to component like clicking a button(onclick) to change value of variable in component or onmouseover to update variable in component-->
    <!--//or entering text in input field to update variable in component-->
    <!--//for that we use event binding and two-way data binding-->
    <!--//we will discuss those in later examples-->

<button (click)="onClick()">greet</button> {{greeting}} <!--//event binding example using (click) event-->
<!--//so event binding is let say capture any DOM event and perform some actions in component class-->
<!--//here, we are capturing click event of button and calling onClick() method in component class-->
<!--//we need to define onClick() method in TestComponent class-->

<!--template reference variable example-->
<br>
<input #myInput type="text"> <!--//using template reference variable to get input value as want to show in greeting message or alert on button click or log in console-->
<button (click)="showMessage(myInput.value)">Greet User</button> <!--//passing input value to showMessage() method as parameter in component class-->
    {{greeting}}
<!--//In the above example, we have used template reference variable myInput to get input value-->
<!--//and passed it to showMessage() method in component class on button click-->
<!--//we need to define showMessage() method in TestComponent class-->

<!--//now lets do two-way data binding example in next examples-->
<!--//two-way data binding allows data to flow in both directions-->
<!--//from component to template and from template to component-->
<!--//means allow us to update a property in component and at same time display updated value in template and vice versa-->
<!--//we will use ngModel directive for two-way data binding-->
<!--//but for that we need to import FormsModule in app.module.ts-->
<!--//we will discuss that in next examples-->


<input type ="text" [(ngModel)]="name"> {{name}}<!--//two-way data binding example using ngModel directive--><!--//here, we are binding input field value to name variable in component class using [(ngModel)] syntax but we need to import FormsModule in app.module.ts for ngModel to work i did that already as you can see in app.module.ts file but still its showing me error red underline under ngModel because u need to restart ur IDE to recognize the newly imported module so just ignore that error for now-->
<!--//so, whenever we type something in input field, it will update name variable in component class and also display updated value in template using {{name}} syntax.-->

<!--//this is end of discussion on data binding examples in Angular-->

<!--//next topic is about DOM manipulation using javascript-->
<!--//DOM stands for Document Object Model-->
<!--//it is a programming interface for web documents-->
<!--//<div //element is used to define a division or a section in an HTML document. It is a block-level element that is commonly used as a container for other HTML elements to style them with CSS or to manipulate them with JavaScript.<!--//how javascript manipulate to html elements? //by accessing DOM(Document Object Model) //DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.//DOM represents the document as nodes and objects.//with DOM, we can access and manipulate HTML elements using javascript.//for example, we can use document.getElementById() method to get an element by its ID and then change its content or style using javascript.//example://-->
<!--//<div id="myDiv">This is my div</div>
<!--//<script>  //javascript code to manipulate HTML element
<!--//   document.getElementById("myDiv").innerHTML = "Hello, World!"; //changing content of div element with id myDiv     
<!--//</script> --><!--//this code will change content of div element to "Hello, World!" when the page loads.//this is how javascript manipulate HTML elements using DOM.//end of example-->  
<!--//</div>-->
<!--//Ok, but here in Angular, we generally do not manipulate DOM directly using javascript because 
// Angular provides its own way of manipulating DOM using data binding and directives.
// //we can use interpolation syntax {{}} to bind data from component to template and vice versa.
// //we can also use structural directives like *ngIf and *ngFor to conditionally render elements or loop through arrays.//this way, we can keep our code clean and maintainable without directly manipulating DOM using javascript.
// //end of discussion on DOM manipulation in Angular
// //Ok so its because angular support typescript and typescript is superset of javascript so all javascript code is valid in typescript but not all typescript code is valid in javascript because typescript has additional features like static typing, interfaces, classes, decorators etc.//so we can use javascript code in typescript files but we need to be careful about type safety and other typescript features.
// //end of discussion on typescript and javascript relationship//
--end of discussion on div and DOM manipulation in Angular-->

<!--// Now Structural Directives three common directives are *ngIf, *ngFor, and *ngSwitch-->
    <div *ngIf="name.length > 5">Name is longer than 5 characters</div> //*ngIf directive example
   
    <!--
      //another example of ngif for hiding/showing element based on condition-->
      <div *ngIf="name === 'Ashish Shukla'; else elseBlock">
        <h3>Hello Ashish Shukla, welcome back!</h3>
      </div>
      <ng-template #elseBlock>
        <h3>Hello Guest, please log in.</h3>
      </ng-template>
     
      <!--//end of ngif example-->
    
    //*ngFor directive example
    <ul>
      <!--//<li *ngFor="let char of name">{{char}}</li>--> 
      <!--//looping through each character of name variable and displaying it in list item //li element using {{char}} syntax for data binding//but i am getting Cannot find a differ supporting object 'Ashish Shukla' of type 'string'. NgFor only supports binding to Iterables such as Arrays.//this error occurs because ngFor directive expects an iterable like array or list but we are passing a string variable name which is not iterable.//to fix this error, we can convert string to array using split() method.//so we can update ngFor directive to use name.split('') instead of name variable directly.//this will convert string to array of characters and ngFor can iterate over it.//let's update the code accordingly.//
      <!--//updated code below-->
      <li *ngFor="let char of name.split('')">{{char}}</li> <!--//*ngFor directive example fixed--> //now it should work fine without error   
    </ul>
      
    <!--//another example of ngFor displaying index along with character-->
    
      <div *ngFor="let char of name.split(''); let i = index">
        <span>{{i}}: {{char}}</span>
      </div>
    
    <!--//when to use li and ul and when to use div and span here//span used for inline elements like text or small pieces of content within a block element//div used for block-level elements that group larger sections of content//so in ngFor example above, we used li and ul because we are displaying list of characters which is a block-level content//but in second example, we used div and span because we are displaying index and character together which is more like inline content within a block//so choice of using div/span or ul/li depends on the type of content we are displaying and how we want to structure it in HTML//generally, use div/span for grouping related content and ul/li for lists of items-->
    <!--//we generally use ul and li for lists of items like displaying list of names, products, etc. -->
    
      <!--//end of ngFor example-->   
    
      //ngSwitch directive example
      <div [ngSwitch]="name.length">
        <div *ngSwitchCase="0">Name is empty</div>
        <div *ngSwitchCase="1">Name has 1 character</div>
        <div *ngSwitchCase="2">Name has 2 characters</div>
        <div *ngSwitchDefault>Name has more than 2 characters</div>
      </div>
      <!--//end of ngSwitch example-->
      
      <!--// end of discussion on structural directives in Angular-->
   
    
    
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
public greeting: string = "";//variable to store greeting message on button click
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
onClick() {
    console.log("Button clicked");//logging message to console on button click
    //alert("Hello " + this.name + ", welcome to Angular!");//showing alert on button click using name variable   
    this.greeting = "Hello " + this.name + ", welcome to Angular!";//updating greeting variable with message on button click
    alert(this.greeting);//showing alert with greeting message
    }

showMessage(message: string) {
    this.greeting = "Hello " + this.name + ", " + message;//updating greeting variable with message from input
    }
}
