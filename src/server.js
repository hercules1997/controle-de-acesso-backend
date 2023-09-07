import app from "./app"

const port = process.env.PORT || 3007;

app.listen(port, console.log("servidor rodadndo na porta", port))