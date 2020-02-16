
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any 

// basically let myVar: any is the pureJS implementation
// of vanillaJS
let strArr: string[];
let numArr: Array<number>;
let boolArr: boolean[];
let anyArr: Array<any>;

// tuple: means an array with exactly matched type as I define?
// you cannot add element than the tuple array that can define
let strNumTuple: [string, number,string]
strNumTuple = ['Brian', 1986,null]
console.log(strNumTuple)

let myVoid: void 
myVoid = undefined;
myVoid = null;

//void type can take in undefined and null;
// undefined type can take undefined/null as weel

// does this mean the data structure needs to have 
// capitalised initial and 

strArr = ['Hello', "Brian"]



myString = 'Hello World'.slice(0,3)
//slice specifying the starting pos and then the character you want to slice
// the usage of slice is the same as in array.
// as the number of elements to slice is not about the ending index.
// this thing seems a bit unintuitive to me at the beginning


myNum = 1
//weird bit about above is that you can do hexdecimal

myBool = true
console.log(myString)
console.log(myNum)
console.log(myBool)
// typescript constraint is only on the developers and not for users and this is quite interesting