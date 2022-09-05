const getUser = () => {
    const fetchCall = fetch('https://www.eventbriteapi.com/v3/users/me/?token=JXJB65RSJCRAKPWOM5QK')
        .then(response => {
            if (response.status === 404) {
                throw new Error("404: Not Found")
            } else if (response.status === 500) {
                throw new Error("500: Server is having issues")
            }
            return response.json()
        })
    return fetchCall
}

const getEvents = () => {
    const options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
    const fetchCall = fetch('https://www.eventbriteapi.com/v3/events', options)
        .then(response => {
            if (response.status === 404) {
                throw new Error("404: Not Found")
            } else if (response.status === 500) {
                throw new Error("500: Server is having issues")
            }
            return response.json()
        })
    return fetchCall
}


const getAllEvents = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("apiKey", "<REQUIRED>");   

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': '0db63607a1mshb7058632ce290c3p10e57ajsn0d36c557c666',
		    'X-RapidAPI-Host': 'Ticketmasterstefan-skliarovV1.p.rapidapi.com',
            'Access-Control-Allow-Origin': '*'
        },
        body: encodedParams
    }
    const fetchCall = fetch('https://ticketmasterstefan-skliarovv1.p.rapidapi.com/searchEvents', options)
        .then(response => {
            if (response.status === 404) {
                throw new Error("404: Not Found")
            } else if (response.status === 500) {
                throw new Error("500: Server is having issues")
            }
            return response.json()
        })
    return fetchCall
}

// const getEvents = () => {
// const encodedParams = new URLSearchParams();
// encodedParams.append("apiKey", "<REQUIRED>");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '0db63607a1mshb7058632ce290c3p10e57ajsn0d36c557c666',
// 		'X-RapidAPI-Host': 'Ticketmasterstefan-skliarovV1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// const fetchCall = fetch('https://ticketmasterstefan-skliarovv1.p.rapidapi.com/searchEvents', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// return fetchCall
// }

export { getUser, getEvents, getAllEvents }



// OAuth token: JXJB65RSJCRAKPWOM5QK
// User ID: 157524127868
// App key: KROZYOJLML6XYZDSJC