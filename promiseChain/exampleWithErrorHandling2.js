const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", //fetches a new promise named "fetchPromise" from json
  );
  
  fetchPromise 
    .then((response) => { //once fetchPromise is resolve, check for a response
      if (!response.ok) { //if the response is not okay
        throw new Error(`HTTP error: ${response.status}`); //throw an error with the response.status as part of it
      }
      return response.json(); //otherwise return the json object from the response
    })
    .then((data) => { //get the data from the json
      console.log(data[0].name); //and output the name from the first element from the data
    });
    .catch((error) => {
      console.error(`Could not get products: ${error}`); // if error is caught error message is output
    });
  