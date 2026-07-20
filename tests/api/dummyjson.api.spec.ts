import { expect, request, test } from "@playwright/test";
import { apiCartScenario, apiCredentials } from "../../utils/test-data";

test.describe("@api DummyJSON API checks", () => {
  test("@api @regression login endpoint returns access token", async () => {
    const apiContext = await request.newContext({
      baseURL: "https://dummyjson.com",
    });

    try {
      const response = await apiContext.post("/auth/login", {
        data: {
          username: apiCredentials.username,
          password: apiCredentials.password,
          expiresInMins: 30,
        },
      });

      expect(response.ok()).toBeTruthy();
      const body = await response.json();
      expect(body.id).toBeGreaterThan(0);
      expect(body.accessToken).toBeTruthy();
      expect(body.refreshToken).toBeTruthy();
    } finally {
      await apiContext.dispose();
    }
  });

  test("@api @regression cart endpoint returns products for user", async () => {
    const apiContext = await request.newContext({
      baseURL: "https://dummyjson.com",
    });

    try {
      const response = await apiContext.get(
        `/carts/user/${apiCartScenario.userId}`,
      );

      expect(response.ok()).toBeTruthy();
      const body = await response.json();
      expect(Array.isArray(body.carts)).toBeTruthy();
      expect(body.carts.length).toBeGreaterThan(0);
      expect(body.total).toBeGreaterThan(0);
    } finally {
      await apiContext.dispose();
    }
  });
  test("@api @regression login endpoint rejects invalid credentials", async () => {
    //apiContext creates a reusable API client: so I can make requests like apiContext.get('/')
    //it avoids repeating the base URL and lets you centralize shared config (headers, auth, cookies), keeping tests isolated, cleaner, and easier to maintain
    const apiContext = await request.newContext({
      baseURL: "https://dummyjson.com",
    });
    try {
      const response = await apiContext.post("/auth/login", {
        data: {
          username: "emilys",
          password: "wrong_password",
          expiresInMins: 30,
        },
      });
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(400);

      const body = await response.json();
      expect(body.message).toContain("Invalid credentials");
    } finally {
      await apiContext.dispose();
    }
  });

  test("@api @regression login endpoint requires username and password", async () => {
    const apiContext = await request.newContext({
      baseURL: "https://dummyjson.com",
    });

    try {
      const response = await apiContext.post("/auth/login", {
        data: {
          password: "emilyspass",
          expiresInMins: 30,
        },
      });
      expect(response.ok()).toBeFalsy();
      expect(response.status()).toBe(400);

      const body = await response.json();
      expect(body.message).toContain("Username and password required");
    } finally {
      await apiContext.dispose();
    }
  });
});
