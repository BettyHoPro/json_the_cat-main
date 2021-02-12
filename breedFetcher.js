const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("Sorry, we don't have this breed.");
        return;
      }
      callback(null, data[0].description);
    }
  );
};
//fetchBreedDescription(process.argv[2], callback);

module.exports = { fetchBreedDescription };