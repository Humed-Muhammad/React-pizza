import axios from "axios";
// const urlOne = "https://jsonplaceholder.typicode.com/todos/";

const url_get = "http://localhost/api/index.php/api/demo";
const url_post = "http://localhost/api/index.php/api/demo/store";
const url_login = "http://localhost/api/index.php/api/demo/login";

const option = {
  headers: { "X-API-KEY": "humed12345" },
};

const post_options = {
  headers: {
    "X-API-KEY": "humed12345",
    "Content-Type": "multipart/form-data",
  },
};

export const get_results = async () => {
  const { data } = await axios.get(url_get, option);
  return data;
};

export const post_results = async () => {
  let formData = new FormData();

  formData.append("email", "abc45@b.com");
  formData.append("title", "Humed Pizza");
  formData.append("ingredients", "tomato, cheeze");

  axios
    .post(url_post, formData, post_options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login_post = async ($formData) => {
  let response = await axios
    .post(url_login, $formData, post_options)
    .then(({ data }) => {
      const status = data["status"];
      const message = data["message"];
      return { status, message };
    });
  return response;
};
