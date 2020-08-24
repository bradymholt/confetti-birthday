const queryMessageMap = new Map([
  ["030a66ac", "Happy Birthday Brady!"],
  ["6b1e852a", "Happy Birthday Nate!"],
  ["af69e6sg", "Happy Birthday Angela!"],
  ["0b8391e0", "Happy Birthday Kevin!"],
  ["5e2017b0", "Emily is Awesome!"],
  ["2acbeccb", "Happy Birthday Daniel!"],
  ["556bc12f", "Happy Birthday Sarah!"], // Sarah S.
  ["a86d69af", "Happy Birthday Kody!"],
  ["3bf4499e", "Happy Birthday Emily!"],
  ["9de5321c", "Happy Birthday Matt!"],
  ["ef691596", "Happy Birthday Jazzi!"],
  ["7ec4e75c", "Happy Birthday Graham!"], // Graham Chance
  ["1a63c3d8", "Happy Birthday Michele!"],
  ["57da66ec", "Happy Birthday Ernie!"],
  ["dcffdc92", "Happy Birthday Niki!"],
  ["4ba477ee", "Happy Birthday Ryan!"],
  ["483ff82d", "Happy Birthday Lauren!"],
  ["1c1f4b1f", "Happy Birthday Kyle!"],
  ["d5e199d1", "Happy Birthday Lindsey!"],
  ["5a9cf214", "Happy Birthday Chris!"],
  ["fb3fc12f", "Happy Birthday Caitlin!"]  
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
  handler
};
