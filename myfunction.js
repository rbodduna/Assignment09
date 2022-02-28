exports.handler = async (event) => {
    // TODO implement

        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            let keyword = event.queryStringParameters.keyword
            let res = "Ronik says " + keyword
            return {
                statusCode :200,
                body: JSON.stringify(res)
            }
        }

};