const apiURL = "https://ftbserver.herokuapp.com/npos"
const soda = require('soda-js');

var consumer = new soda.Consumer('data.colorado.gov');

let stuff

consumer.query()
    .withDataset('p3jp-z4tq')
    .limit(2)
    .where({ principalcity: 'Denver' })
    // .order('namelast')
    .getRows()
    .on('success': postData, function (rows) {
        rows.map((nposNew) => {
            
    }) 
})
    .on('error', function (error) { console.error(error); });

console.log(rows);


let data = {
    fein: nposNew.fein,
    name: nposNew.name,
    revenuetotal: nposNew.revenuetotal,
    expensestotal: nposNew.expensestotal
}
fetch(apiURL, {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(response => {
        showSuccess(response.message)
        setTimeout(() => (removeMsg()), 4000);
    })
    .catch(console.error);
// console.log(stuff);

// console.log(npost);



