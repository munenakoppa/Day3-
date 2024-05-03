
//array of oscar winning movies
const oscarMovies = [
 { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
 { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
 { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" }
]


//Ittirating trrough forEach method
console.log('Output from forEarch');
oscarMovies.forEach(function(movie,index,array){
	
	
	console.log(`Index: ${index}, Title: ${movie.title}, Movie: ${JSON.stringify(movie)}`);
	
});

//Ittirating trrough traditional for loop method
console.log('Output from for loop');
for(let i=0;i<oscarMovies.length;i++){
	
	console.log(`Index: ${i}, Title: ${oscarMovies[i].title}, Movie: ${JSON.stringify(oscarMovies[i])}`);
}
