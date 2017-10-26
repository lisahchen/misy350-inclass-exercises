console.log("hello");

//arrays
let bucket_list = ["learn to fly", 67, "go to Japan"];
console.log(bucket_list);
console.log(bucket_list.length);
console.log(bucket_list[3]);

//for loop
for (let i = 0; i < bucket_list.length; i++){
  console.log(bucket_list[i]);
}

//nested loop
let movie_list_1 = [
  "Movie 1",
  "Movie 2",
  "Movie 5",
  "Movie 6",
];

let movie_list_2 = [
  "Movie 3",
  "Movie 5",
  "Movie 1",
];

for (let i = 0; i < movie_list_1.length; i++){
  for (let j = 0; j < movie_list_2.length; j++){
    if (movie_list_1[i] == movie_list_2[j]){
      console.log(movie_list_1[i]);
    }
  }
}

//while loop
let balance = 1000;
let years = 0;

while (balance < 100000){
  balance += balance * 0.07;
  years += 1;
}

console.log(years);

//iterators
movie_list_1.forEach(movie => console.log("- " + movie));

let new_list = movie_list_1.filter(movie => movie.slice(0, 1) == "1");
new_list.forEach(movie => console.log("- " + movie));
