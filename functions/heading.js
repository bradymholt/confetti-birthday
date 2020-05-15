const headingMap = {
  "030a66ac": "Happy Birthday Brady!",
};

exports.handler = function (event, context, callback) {
  const heading =  headingMap["030a66ac"];
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ heading, event }),
  });
};
