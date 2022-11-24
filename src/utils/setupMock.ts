export default (config: { mock?: boolean; setup: () => void }) => {
  const { mock = true, setup } = config;
  if (mock === false) return;
  setup();
};
