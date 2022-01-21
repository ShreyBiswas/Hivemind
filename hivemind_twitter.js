const detail = fetch("https://api.twitter.com/1.1/trends/place.json?id=1", {
    method: "GET",
    //mode: "cors",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
    },
})
    .then((response) => response.json)
    .then((data) => {
        console.log(data);
    });
