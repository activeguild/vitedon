export const fetchEnvironment = async () => {
  const response =  await fetch("/environment.json")
  const environmentAsJson = await response.json();
  return environmentAsJson;
};
