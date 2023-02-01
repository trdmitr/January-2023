
export default class CaverServise {
    static async getCavers() {
       
       
const data = await  fetch("https://api.jsonbin.io/v3/b/634d91750e6a79321e2bb874", 
{
    headers: {
        'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
    },
}

)
.then(response => {
    return response.json().then(data => {
      if (response.ok) {
        return data;
      } else {
        return Promise.reject({status: response.status, data});
      }
    });
  })
  .then(result => {console.log('success:', result)})
  .catch(error => console.log('error:', error));
}
}