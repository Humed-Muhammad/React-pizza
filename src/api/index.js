import axios from "axios";

const signup_url = "http://localhost/reci/server/index.php/api/signup";
const login_url = "http://localhost/reci/server/index.php/api/login";
const home_url = "http://localhost/reci/server/index.php/api/home";
const add_url = "http://localhost/reci/server/index.php/api/add";
const edit_url = "http://localhost/reci/server/index.php/api/edit";
const delete_url = "http://localhost/reci/server/index.php/api/delete";
const profile_url = "http://localhost/reci/server/index.php/api/profile";
const getone_url = "http://localhost/reci/server/index.php/api/getone";
const webtoken_url = "http://localhost/reci/server/index.php/api/webtoken";
const userprofile_url =
  "http://localhost/reci/server/index.php/api/userprofile";

const options = {
  headers: {
    "X-API-KEY": "humed12345",
    "Content-Type": "application/json",
  },
};

export const signUp = async (data) => {
  let formData = new FormData();
  formData.append("email", data[0]["email"]);
  formData.append("password", data[0]["password"]);
  formData.append("confirm", data[0]["confirm"]);
  formData.append("firstname", data[0]["firstname"]);
  formData.append("lastname", data[0]["lastname"]);

  return axios
    .post(signup_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const login = async (data) => {
  console.log(await data);
  let formData = new FormData();
  formData.append("email", data[0]["email"]);
  formData.append("password", data[0]["password"]);
  return axios
    .post(login_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const home = async () => {
  const token = localStorage.getItem("token");
  const optionsHome = {
    headers: {
      "X-API-KEY": "humed12345",
      Authorization: `Bearer ${token}`,
    },
  };
  let { data } = await axios.get(home_url, optionsHome);
  return data;
};

export const add_pizza = async (pizzaData) => {
  let formData = new FormData();
  const storedEmail = localStorage.getItem("userEmail");
  formData.append("email", storedEmail);
  formData.append("title", pizzaData[0]["title"]);
  formData.append("ingredients", pizzaData[0]["ingredients"]);
  return axios
    .post(add_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const edit_pizza = async (pizzaData) => {
  let formData = new FormData();
  const storedId = localStorage.getItem("id");
  formData.append("id", storedId);
  formData.append("title", pizzaData[0]["title"]);
  formData.append("ingredients", pizzaData[0]["ingredients"]);
  return axios
    .post(edit_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const delete_pizza = async () => {
  const storedId = localStorage.getItem("id");
  let formData = new FormData();
  formData.append("id", storedId);
  return axios
    .post(delete_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const update_profile = async () => {
  const storedEmail = localStorage.getItem("userEmail");
  const image = localStorage.getItem("profileImage");
  // console.log(image);
  const formData = new FormData();
  formData.append("image", image);

  formData.append("email", storedEmail);
  return axios
    .post(profile_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const getOnePizza = async () => {
  const storedId = localStorage.getItem("id");
  let formData = new FormData();
  formData.append("id", storedId);
  return axios
    .post(getone_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const userProfile = async () => {
  let userEmail = localStorage.getItem("userEmail");
  let formData = new FormData();
  formData.append("userEmail", userEmail);
  return axios
    .post(userprofile_url, formData, options)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
};
