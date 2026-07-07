export const credentials = {
  username: process.env.SAUCE_USERNAME ?? "standard_user",
  password: process.env.SAUCE_PASSWORD ?? "secret_sauce",
};

export const invalidCredentials = {
  username: "locked_out_user",
  password: "wrong_password",
};

export const loginScenarios = [
  {
    name: "valid standard user can login",
    username: credentials.username,
    password: credentials.password,
    shouldLoginSucceed: true,
    expectedErrorText: "",
  },
  {
    name: "locked out user sees a lock error",
    username: "locked_out_user",
    password: "secret_sauce",
    shouldLoginSucceed: false,
    expectedErrorText: "Sorry, this user has been locked out.",
  },
  {
    name: "wrong password shows invalid credentials error",
    username: "standard_user",
    password: "wrong_password",
    shouldLoginSucceed: false,
    expectedErrorText: "Username and password do not match any user",
  },
] as const;

export const cartScenarios = [
  {
    name: "add backpack to cart",
    productTestId: "add-to-cart-sauce-labs-backpack",
  },
  {
    name: "add bike light to cart",
    productTestId: "add-to-cart-sauce-labs-bike-light",
  },
] as const;

export const checkoutData = {
  firstName: "QA",
  lastName: "Portfolio",
  postalCode: "10001",
};
