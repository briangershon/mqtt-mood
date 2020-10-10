# mqtt-mood

Send your mood to MQTT and listen for mood changes.

Uses MQTT with topic of `mood`.

## How to use

Run with environment variables set for your mqtt server, username and password.

    MQTT_BROKER="mqtt://test.mosquitto.org" USERNAME="joe" PASSWORD="smith" npm start

Press 1 for happy
Press 2 for sad
Press 3 for angry

You'll also see updates made on the MQTT topic.
