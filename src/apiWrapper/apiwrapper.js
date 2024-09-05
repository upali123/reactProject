export default async function postData(url, data,method) {
    try {
        console.log({data},"check");
      const response = await fetch(url, {
        method: method,
      
        body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json(); // Parse the JSON response
      return result; // Return the parsed data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }