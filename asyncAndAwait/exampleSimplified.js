async function fetchProducts() {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", // create promise named "response" (system will await for fetch of the promise from the given url)
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`); //if response is not okay, throw error saying "HTTP error:" followed by status of response
    }
    const data = await response.json(); //create a new promise for data from the 
    return data;
  }
  
  const promise = fetchProducts();
  promise
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
  