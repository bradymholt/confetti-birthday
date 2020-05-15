const queryNameMap = new Map([["030a66ac", "Brady"]]);

exports.handler = function (event, context, callback) {
  const name = queryNameMap.get(queryStringParameters["id"]);
  const heading = `Happy Birthday ${name}!`;
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ heading }),
  });
};
