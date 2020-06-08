const queryMessageMap = new Map([
  ["030a66ac", "Happy Birthday Brady!"],
  ["6b1e852a", "Happy Birthday Nate!"],
  ["af69e6sg", "Happy Birthday Angela!"],
  ["0b8391e0", "Happy Birthday Kevin!"],
  ["5e2017b0", "Emily is Awesome!"]
]);

exports.handler = function (event, context, callback) {
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
