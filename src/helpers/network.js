const API_ROOT = "https://jsonplaceholder.typicode.com";

export const httpGet = async endPoint => {
  try {
    const response = await fetch(`${API_ROOT}/${endPoint}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.warn("httpGet error ", err);
  }
};
