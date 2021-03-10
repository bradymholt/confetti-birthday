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
  ["fb3fc12f", "Happy Birthday Caitlin!"],
  ["1ebec569", "Emily is Super Awesome.  Happy Birthday!!!!"], // Emily M
  ["52d4fa5c", "Happy Birthday Carlos!"],
  ["9b23ad16", "Happy Birthday Emily!"], // Emily H
  ["3fe48ce4", "Lindsey is da' Bomb!"],
  ["82dcd3d9", "Happy Birthday Ben!"], // Ben B
  ["7fa14f72", "Happy Birthday Janelle!"], // Janelle
  ["600d4efd", "Happy Birthday Todd!"],
  ["b7d5f826", "Happy Birthday Rachel!"],
  ["8f301d2e", "Happy Birthday Taylor!"],
  ["f1cfe029", "Happy Birthday Cindy!"],
  ["536a8e11", "Happy Birthday Melissa!"],
  ["9a8975ef", "Happy Birthday Neal!"],
  ["8bcfebb7", "Happy Birthday Jorge!"],
  ["3748a5fe", "Happy Birthday Chance!"],
  ["7c972873", "Happy Birthday Emma!"],
  ["0623da10", "Happy Birthday Jannelle!"],
  ["cfe9a6a3", "Happy Birthday Adam!"],
  ["18dbae5f", "Happy Birthday Laura!"],
  ["48594af6", "Happy Birthday Tristan!"],
  ["a85a2af4", "Happy Birthday Chrissy!"],
  ["78cfcd2a", "Happy Birthday Michael!"],
  ["a2b42ee4", "Happy Birthday Arturo!"],
  ["0f69fadd", "Happy Birthday Haley!"],
  ["0dd8596b", "Happy Birthday Erin!"],
  ["63ba4d88", "Happy Birthday Buffy!"],
  ["acb8decd", "Happy Birthday Kathryn!"],
  ["9595386b", "Happy Birthday Robert!"],
  ["a8547391", "Happy Birthday Jesse!"],
  ["21994320", "Happy Birthday Alan!"],
  ["839d8581", "Happy Birthday Jeff!"],
  ["839d8581", "Happy Birthday Jason!"],
  ["4523e3c0", "Happy Birthday Barry!"]
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
