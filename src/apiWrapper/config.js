import axios from "axios";

const createInstance = () => {
  const instance = axios.create({
    baseURL:"http://localhost:3000",
  });
  // ------------------> add env file in here.

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  }); //add header for authorization

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 200 && response.statusText === "OK") {
        if (response?.data?.error === "Token is expired or invalid") {
          window.location.reload();
        }
      }
      return response;
    },

    (err) => {
      // Any HTTP Code which is not 2xx will be considered as error
      const statusCode = err.response.status;

      console.log(statusCode, "statusCode 403");
      if (statusCode === 403) {
        localStorage.clear();
        window.location.href = "/login";
      }

      throw err;
    }
  );
  //------------------> manage response interception

  return instance;
  //------------------> return instance
};

export default createInstance();
