const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", // fetches a new promise "fetchPromise" using json data at url location
  );
  
  console.log(fetchPromise); // displays/ logs to console "fetchPromise" contents
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`); // when "fetchPromise" request is complete, a "Received response:" with the value of the response.status is logged to console
  });
  
    console.log("Started request…"); // so prior to the promise completing, a "Started request..." message is displayed
  