'use strict';

module.exports.sum = async (event) => {
  let ret = ""
  if (event.queryStringParameters == undefined || event.queryStringParameters.a == undefined || event.queryStringParameters.b == undefined) {
    ret = "Or a or b is empty"
  } else {
    ret = "" + (parseInt(event.queryStringParameters['a']) + parseInt(event.queryStringParameters['b']));
  }
  return {
    statusCode: 200,
    body: ret
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
