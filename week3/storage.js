//Browser storage
//localStorage - it  stores data untill you remove manual
localStorage.setItem('name', 'John Doe') // save data
localStorage.getItem('name'); //retrieving data from the Database
localStorage.clear()  //clear all item
localStorage.removeItem(sessionName) //deleting item in the data DB

let user = {
    name: 'john Doe'
    age: 30,
}
localStorage.setItem('user', JSON.stringify(user)) //add quote on name //its for saving and sending data
let data = JSON.parse(localStorage.getItem('user'))  //Convert localStorage to JSON string(retriving and getting data)
data.name;
//sessionStorage - keep data temparily
sessionStorage.setItem('name', 'John Doe') // set item
MediaSessionStorage.getItem('name'); //Get item
sessionStorage.clear()  //clear all item
sessionStorage.removeItem(sessionName) //remove specific item
//cookies
//indexedDatabase -


