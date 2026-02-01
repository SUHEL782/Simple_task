const http = require("http");

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Docker Test App</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .card {
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      max-width: 500px;
    }

    h1 {
      margin-bottom: 10px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      opacity: 0.9;
    }

    .badge {
      margin-top: 20px;
      display: inline-block;
      padding: 8px 16px;
      background: #00c853;
      color: #000;
      border-radius: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1> Node.js Docker App</h1>
    <p>Your application is running successfully inside a Docker container.</p>
    <div class="badge">Docker Container Running on Top</div>
    <div class="badge">Thanks</div>
    <p style="margin-top: 25px; font-size: 14px;">
      Port: ${PORT}
    </p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
