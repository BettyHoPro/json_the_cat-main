const request = require("request");

const searchBreed = (breedName) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Sorry, we don't have this breed.");
        return;
      }
      console.log(data[0].description);
    }
  );
};
searchBreed(process.argv[2]);
