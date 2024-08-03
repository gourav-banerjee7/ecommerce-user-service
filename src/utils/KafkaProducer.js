import kafka from "kafka-node";

class KafkaProducer {
  constructor() {
    const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_HOST });
    this.producer = new kafka.Producer(client);

    this.producer.on("ready", () => {
      console.log("Kafka Producer is connected and ready.");
    });

    this.producer.on("error", (error) => {
      console.error("Error in Kafka Producer", error);
    });
  }

  async publishEvent(topic, event) {
    const payloads = [{ topic, messages: JSON.stringify(event) }];
    this.producer.send(payloads, (error, data) => {
      if (error) {
        console.error("Failed to publish event", error);
      } else {
        console.log("Event published", data);
      }
    });
  }
}

export default new KafkaProducer();
