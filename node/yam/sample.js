var request = require('request');

var url = 'http://apis.data.go.kr/1390802/AgriFood/MzenFoodCode/getKoreanFoodList';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=3mKWpcqU6sKZVtaK0WjIQcg8WU5aHSCkGVwLilt%2FvWwE7TP9a0leTQfFtMzbUJmzsjelusNj3Q2XXX0VINWBMg%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('Page_No') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('Page_Size') + '=' + encodeURIComponent('30'); /* */
queryParams += '&' + encodeURIComponent('food_Group_Code') + '=' + encodeURIComponent('06'); /* */
queryParams += '&' + encodeURIComponent('food_Name') + '=' + encodeURIComponent('감자'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
