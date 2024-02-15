const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Greeting</title></head>");
    res.write(
      "<body><h1>Welcome to My App</h1><form action='/create-user' method='POST' ><input type='text' name='username'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>List of Users</title></head>");
    res.write(
      "<body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const arrayOfChunks = [];
    req.on("data", (chunk) => {
      arrayOfChunks.push(chunk);
    });
    return req.on("end", () => {
      const parsedData = Buffer.concat(arrayOfChunks).toString();
      const response = parsedData.split("=")[1];
      console.log(response);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Error</title></head>");
  res.write("<body><h1>Error Page</h1><p>Route it not available</p></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
