/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map(name => 
    name[0].toUpperCase() + name.slice(1))

console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)

function Colors() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div key={colors.id}>
            {colors.map((color) => {
                return <h3>{color}</h3>   
            })}
        </div>
    )
}

export default Colors

// 1. What does the `.map()` array method do?
// Returns and gives you chance to edit every property with the same comand
//..
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.

// 2. What do we usually use `.map()` for in React?
// To get data into repeting component atributes
//..
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?
// Because this way you can pars a large amount of data into your project with just a couple lines of code
//..
//It makes our code more "self-sustaining" - not requiring
//additional changes whenever the data changes.