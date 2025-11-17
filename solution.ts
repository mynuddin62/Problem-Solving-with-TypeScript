
type strNumOrBool = string | number | boolean
type FormatValFunc = (input: strNumOrBool) => strNumOrBool

const formatValue : FormatValFunc = input => {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * 10;
  } else {
    return !input;
  }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

type arrayOfUnknownOrStr =  Array<unknown> | string
type getLenFunc = (input: arrayOfUnknownOrStr) => number
const getLength : getLenFunc = i => typeof i === 'string'? i.length : i.length

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));


class Person {
    
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());



type BookObject = {
    title: string
    rating : number
}

type ratingFunc = (input: Array<BookObject>) => Array<BookObject>
const filterByRating: ratingFunc = inp => inp.filter(o => o.rating >= 4)

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type FilterActiveUsersFunc = (input: User[]) => User[];

const filterActiveUsers: FilterActiveUsersFunc = (input) => {
  return input.filter(user => user.isActive === true);
};

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


type NumOrStr = number | string;
type getUniqueValuesFunc = (arr1: NumOrStr[],arr2: NumOrStr[]) => NumOrStr[]
const  getUniqueValues : getUniqueValuesFunc  = (arr1,arr2) => {
  const result: NumOrStr[] = []
  for (let i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i]!
  }

  const exists = (value: NumOrStr): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i]!)) {
      result[result.length] = arr2[i]!
    }
  }



  return result
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

type CalculateTotalPriceFunc = (products: Product[]) => number;

const calculateTotalPrice: CalculateTotalPriceFunc = (products) => {
  return products
    .map(p => {
      const base = p.price * p.quantity;
      const discountAmount = p.discount ? base * (p.discount / 100) : 0;
      return base - discountAmount;
    })
    .reduce((sum, price) => sum + price, 0);
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products)); 

