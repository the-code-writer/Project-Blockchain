const rimraf = require(“rimraf”);
rimraf('./build', error => {
  if (error) console.error(error);
});