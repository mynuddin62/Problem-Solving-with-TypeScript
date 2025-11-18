/*property start*/

type BookObject = {
    title: string
    rating : number
}

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

type Product = {
  name: string
  price: number
  quantity: number
  discount?: number
}

interface Book {
  title: string
  author: string
  publishedYear: number
  isAvailable: boolean
}


type strNumOrBool = string | number | boolean
type FormatValFunc = (input: strNumOrBool) => strNumOrBool
type arrayOfUnknownOrStr =  Array<unknown> | string
type getLenFunc = (input: arrayOfUnknownOrStr) => number
type ratingFunc = (input: Array<BookObject>) => Array<BookObject>
type FilterActiveUsersFunc = (input: User[]) => User[]
type PrintBookDetailsFunc = (input: Book) => string
type NumOrStr = number | string
type getUniqueValuesFunc = (arr1: NumOrStr[],arr2: NumOrStr[]) => NumOrStr[]
type CalculateTotalPriceFunc = (products: Product[]) => number


/*property end*/


// -----------------------------------------------------------------------------------------------------
// @ Init
// -----------------------------------------------------------------------------------------------------

//
const formatValue : FormatValFunc = input => {
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else if (typeof input === 'number') {
    return input * 10
  } else {
    return !input
  }
}

//
const getLength : getLenFunc = i => typeof i === 'string'? i.length : i.length

//
class Person {
    
  private readonly name: string
  private readonly age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}

//
const filterByRating: ratingFunc = inp => inp.filter(o => o.rating >= 4)

//
const filterActiveUsers: FilterActiveUsersFunc = input => input.filter(user => user.isActive === true)

//
const printBookDetails : PrintBookDetailsFunc = book => {
  const availability = book.isAvailable ? "Yes" : "No"
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
}

//
const  getUniqueValues : getUniqueValuesFunc  = (arr1,arr2) => {
  const result: NumOrStr[] = []
  const seen: { [key: string]: boolean } = {}
  
  const addToResult = (value: NumOrStr) : void => {
    const key = `${typeof value}#${value}`
    
    if (!seen[key]) {
      seen[key] = true
      result[result.length] = value
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    addToResult(arr1[i])
  }

  for (let i = 0; i < arr2.length; i++) {
    addToResult(arr2[i])
  }

  return result
}

//
const calculateTotalPrice: CalculateTotalPriceFunc = products => {
  return products
    .map(p => {
      const base = p.price * p.quantity
      const discountAmount = p.discount ? base * (p.discount / 100) : 0
      return base - discountAmount
    })
    .reduce((sum, price) => sum + price, 0)
}
