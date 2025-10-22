const http = require("http");

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  `Don’t let yesterday take up too much of today.`,
  `It’s not whether you get knocked down, it’s whether you get up.`,
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  `The harder you work for something, the greater you’ll feel when you achieve it.`,
  "Dream bigger. Do bigger."
];

const server = http.createServer((req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.write("<h1>💬 Random Quote Generator</h1>");
  res.write(`<p style="font-size:20px;">"${randomQuote}"</p>`);
  res.write("<p>Refresh the page to see a new quote!</p>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});