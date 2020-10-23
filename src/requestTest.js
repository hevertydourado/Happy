const qs = require('qs')
const axios = require('axios')

axios.get('https://api.qrserver.com/v1/create-qr-code/', {
    responseType: 'arraybuffer',
    params: {
        width: '300',
        height: '300',
        data: 'https://www.google.com',
    },
    headers: {
        accept: 'image/png', 
        host: 'api.qrserver.com'
    }
  })
.then(function (response) {
  console.log(response.data);
})
.catch(function (response) {
  console.log(response);
});