# mqtt-mood

Send your mood to MQTT and listen for mood changes.

Uses MQTT with topic of `mood`.

## How to use

Run with environment variables set for your mqtt server, username and password.

    npm install
    MQTT_BROKER="mqtt://test.mosquitto.org" USERNAME="joe" PASSWORD="smith" npm start

    Press 1 to send 'happy' message
    Press 2 to send 'sad' message
    Press 3 to send 'angry' message

You'll also see updates made on the MQTT topic.
