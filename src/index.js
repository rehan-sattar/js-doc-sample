const { add, subtract, multiply, divide } = require('./calculator');

/**
 * @type {String}
 * @description Student Name
 */
const studentName = 'Rehan Sattar';

/**
 * @type {Array<Number>}
 * @description Grades of student
 */
const grades = [12, 23.4, 43.5, 10];

/**
 * @type {{ id: String, description: String}}
 * @description Todo Example Object
 */
const todo = {
  id: 'SomeId',
  description: 'Some Description'
};

/**
 *
 * @description Calculates the total amount with tax
 * @param {number} total - total amount
 * @param {number} tax  - tax percentage
 * @returns {string} - total with tax.
 */
const calculateTax = (total, tax) => {
  return `${total + total * tax}`;
};

/**
 * @typedef {Object} Student -
 * @property {number} id - id of the student
 * @property {string} name - name of student
 * @property {number} age - age of student
 * @property {boolean} isActive - activation status of student
 */

/**
 * @type {Student}
 * @description student object
 */
const student = {
  id: 64,
  name: 'Rehan Sattar',
  age: 21,
  isActive: false
};

/**
 * @description Class to create a person
 */
class Person {
  /**
   * @param {Object} personInfo Information about person.
   */
  constructor(personInfo) {
    /**
     * @property {string} name - person's name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age - person's age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name & age
   * @returns {void}
   */
  greet() {
    console.log(`My name is: ${this.name}, I'm ${this.age} years old`);
  }
}

/**
 * @description Person object
 * See {@link Person}
 */
const person01 = new Person({ name: 'Rehan Sattar', age: 21 });

console.log(person01.greet());

/** module usage */

console.log(add(20, 23));
