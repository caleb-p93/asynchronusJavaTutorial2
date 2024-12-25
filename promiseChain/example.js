const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", // fetches a new promise "fetchPromise" using json data at url location
  );
  
  fetchPromise.then((response) => { 
    const jsonPromise = response.json(); //when fetchPromise request is complete, a new promise variable that stores the response is created 
    jsonPromise.then((data) => {
      console.log(data[0].name); //and the name data from the data found in the json object is output
    });
  });
  