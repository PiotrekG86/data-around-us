let Title = "Star Wars New Hope" ;
console.log(Title) ;
let Author = "George Lucas" ;
console.log(Author) ;
let Year = 1977 ; 
console.log(Year) ;
let isNewerThan2000 = "false" ;
console.log(isNewerThan2000) ;
let Age = 2022 ; 
console.log(Age) ;
let Characters = ["Luke Skywalker","Han Solo","Leia Organa","Jabba Hutt"] ;
console.log(Characters) ;
console.log(Characters[0]) ;
console.log(Characters[1]) ;
let favoriteBook = { Title : "Star Wars New Hope" , Author : "George Lucas" , Year : 1977 , isNewerThan2000 : "false" , Age : 2022 , Characters : ["Luke Skywalker","Han Solo","Leia Organa","Jabba Hutt"] } ;
console.log(favoriteBook) ;

console.log(favoriteBook.Title) ; 
console.log(favoriteBook.Author) ;
console.log(favoriteBook.Year) ;
console.log(favoriteBook.Characters[0]) ;


Title = "The Hatefull Eight";
console.log(Title);
Author = "Quentin Tarantino";
console.log(Author);
Year = 2015 ;
console.log(Year);
isNewerThan2000 = "true" ;
console.log(isNewerThan2000);

Age = 2022 ;
console.log(Age);
Characters = [ "John Ruth",
"Major Marquise Walker",
"Chris Mannix",
"Oswaldo Mobray"];
console.log(Characters);

let favoriteBook2 = {Title : "The Hatefull Eight",
Author : "Quentin Tarantino",
Year : 2015,
isNewerThan2000 : "true",
Age : 2022,
Characters : [ "John Ruth",
"Major Marquise Walker",
"Chris Mannix",
"Oswaldo Mobray"]};

let favoriteBooks = {favoriteBook, favoriteBook2};

console.log(favoriteBooks);
console.log(favoriteBook2.Title, favoriteBook2.Characters[0]);

console.log(favoriteBook2.Year - favoriteBook.Year);