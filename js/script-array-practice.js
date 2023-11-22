//STEP 1
let stringArray = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting"]
console.log(stringArray[1]);
//STEP 2
let movies = new Array(5)
for (let i = 0; i < movies.length; i++) {
    movies[i] = stringArray[i]  
}
console.log(movies[0]);
//STEP 3
movies[0] = stringArray[0]
movies[1] = stringArray[1]
movies[2] = "UP"
movies[3] = stringArray[2]
movies[4] = stringArray[3]
movies[5] = stringArray[4]
console.log(movies.length)
//STEP 4
movies = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting"]
delete movies[0]
console.log(movies)
//STEP 5
movies = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting", "UP", "Final Destination"]
for(film in movies){
    console.log(movies[film])
}
//STEP 6
movies = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting", "UP", "Final Destination"]
for(let film of movies){
    console.log(film)
}
//STEP 7
movies = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting", "UP", "Final Destination"]
movies.sort()
for(let film of movies){
    console.log(film)
}
//STEP 8
movies = ["Avatar", "Get Rich or Die Trying", "Avenger's", "Fast and Furious", "Good Will Hunting", "UP", "Final Destination"]
let leastFavMovies = ["Old Dads", "Bullet Train","Glass Onion"]
console.log('Movies I like:')
console.log('')
for(let film of movies){
    console.log(film)
}
console.log('')
console.log('Movies I regret watching:')
console.log('')
for(let film of leastFavMovies){
    console.log(film)
}
//STEP 9
movies = movies.concat(leastFavMovies)
movies.sort().reverse()
for(let film of movies){
    console.log(film)
}
//STEP 10
let lastItem = movies.pop()
console.log(lastItem)
movies.push(lastItem) // to return the array to back to original array
//STEP 11
let firstItem = movies.shift()
console.log(firstItem)
movies.unshift(firstItem) // to return the array to back to original array
//STEP 12
let firstIndex = movies.indexOf(leastFavMovies[0])
let secondIndex = movies.indexOf(leastFavMovies[1])
let thirdIndex = movies.indexOf(leastFavMovies[2])
movies[firstIndex] = "Black Box"
movies[secondIndex] = 'American Heist'
movies[thirdIndex] = 'Batman'
//STEP 13
movies = [['Avatar', 1],["Avenger's", 2],['Fast and furious', 3],['Good will Hunting',4],['Final Destination',5]]
let movieNames = movies.filter((item) => {
    return typeof item === 'string'
})
for (let film of movieNames){
    console.log(film)
}
//STEP 14
let employees = ['Hashim','Mark','Zak','Xander','John']
let showEmployee = function (arr){
    console.log('Employees:');
    console.log('');
    for (let names of arr) {
        console.log(names);
    }
}
showEmployee(employees)
//STEP 15
function filterValues(arr){
    return arr.filter((item) => {
        return (item != null || item != false || item != 0)
    })
}
//STEP 16
function randomItem(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    return (arr[randomIndex])
}
//STEP 17
function largestNum(arr){
    arr.sort()
    return arr[arr.length - 1]
}