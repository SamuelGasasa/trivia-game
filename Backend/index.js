require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
  console.log(process.env.NODE_ENV);
});
