const authors = [
{id: "5c6a7eeb3e37f613084f22b2", name: "Adam Fewer"},
{id: "5c6a802d3e37f613084f22c9", name: "Charles Bukowski"},
{id: "5c6a7f2c3e37f613084f22b6", name: "Yaşar Kemal"},
];

// pass a function to map
const authorIdList = authors.map(object => object.id);

console.log(authorIdList);
// expected output: Array ["5c6a7eeb3e37f613084f22b2", "5c6a802d3e37f613084f22c9", "5c6a7f2c3e37f613084f22b6"]
