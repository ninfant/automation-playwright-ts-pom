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
      const response = await apiContext.get(`/carts/user/${apiCartScenario.userId}`);

      expect(response.ok()).toBeTruthy();
      const body = await response.json();
      expect(Array.isArray(body.carts)).toBeTruthy();
      expect(body.carts.length).toBeGreaterThan(0);
      expect(body.total).toBeGreaterThan(0);
    } finally {
      await apiContext.dispose();
    }
  });
});
