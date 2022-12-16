export default () => ({
  kafka: {
    username: process.env.KAFKA_USERNAME ?? '',
    password: process.env.KAFKA_PASSWORD ?? '',
    mechanism: process.env.KAFKA_MECHANISM ?? '',
    brokers: process.env.KAFKA_BROKERS ?? '',
  },
});
