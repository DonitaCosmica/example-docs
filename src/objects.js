//@ts-check

/**
 * Person Object
 * @type {{id: number, firstName: string, lastName: string, age: number}}
 */
const person = {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Ryan',
    age: 30
}

/**
 * Person Object Two
 * @type {{id: number | string, firstName: string, lastName: string, age: number | string}}
 */
const person2 = {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Ryan',
    age: "30"
}