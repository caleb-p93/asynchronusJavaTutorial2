const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", //same as initial example, fetches a new promise "fetchPromise"
  );
  
  fetchPromise //once fetchPromise is resolved...
    .then((response) => response.json()) //if there's a response, get the json object
    .then((data) => { //get the data from the object
      console.log(data[0].name); //output the name from the first element of the data
    });
  