var mqtt = require("mqtt");
const readline = require("readline");

// setup MQTT and listen for events
var client = mqtt.connect(process.env.MQTT_BROKER, {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

client.on("connect", function () {
  client.subscribe("mood");
});

client.on("message", function (topic, message) {
  const now = new Date();
  console.log(now.toLocaleString(), `The mood is ${message.toString()}`);
});

// Listen for key presses and send messages. ctrl-c to exit
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    // console.log(key);
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
  }
});
