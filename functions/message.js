const queryMessageMap = new Map([
  ["030a66ac", "Happy Birthday Brady!"]  
]);

const handler = function (event, context, callback) {
  const message = queryMessageMap.get(event.queryStringParameters["id"]) || "";
  const heading = `${message}`;
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ heading }),
  });
};

module.exports = {
  queryMessageMap,
  handler,
};
