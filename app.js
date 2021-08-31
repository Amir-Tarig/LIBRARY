// let myLibrary = []

// function Book() {

// }

// function addBookToLibrary() {
    
// }

fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-books.p.rapidapi.com",
		"x-rapidapi-key": "7ecbb014b0mshc95dbe51b85f5d9p186b56jsn682d5e35fb85"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
});