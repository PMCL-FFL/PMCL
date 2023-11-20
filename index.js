// Replace YOUR_API_KEY with the API key obtained from OpenCage Geocoding
const apiKey = '9a85b8b64a6645649d02dbd5ecea457b';

// Replace LATITUDE and LONGITUDE with the actual coordinates
const latitude = '28.2600067';
const longitude = '70.0319379';

// Make a request to the OpenCage Geocoding API
const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the formatted address from the response
    const formattedAddress = data.results[0].formatted;
    console.log('Formatted Address:', formattedAddress);

    // Display the address on the page
    const addressElement = document.createElement('p');
    addressElement.textContent = `Formatted Address: ${formattedAddress}`;
    document.body.appendChild(addressElement);
  })
  .catch(error => console.error('Error:', error));
