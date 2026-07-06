export const credentials = {
  username: process.env.SAUCE_USERNAME ?? "standard_user",
  password: process.env.SAUCE_PASSWORD ?? "secret_sauce",
};

export const invalidCredentials = {
  username: "locked_out_user",
  password: "wrong_password",
};

export const checkoutData = {
  firstName: "QA",
  lastName: "Portfolio",
  postalCode: "10001",
};
