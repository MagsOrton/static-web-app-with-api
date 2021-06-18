module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const postcode = (req.query.postcode || (req.body && req.body.postcode));
    const responseMessage = postcode;
     
    context.res.json = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}