var mqtt = require("mqtt");

var client = mqtt.connect(process.env.MQTT_BROKER, {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    switch (key.name) {
      case "1":
        client.publish("mood", "happy", { retain: true });
        break;
      case "2":
        client.publish("mood", "sad", { retain: true });
        break;
      case "3":
        client.publish("mood", "angry", { retain: true });
        break;
    }
    // console.log(`You pressed the "${str}" key`);
    // console.log(key);
  }
});

client.on("connect", function () {
  client.subscribe("mood", function (err) {
    // if (!err) {
    //   client.publish("mood", "happy");
    // }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  //   client.end()
});
