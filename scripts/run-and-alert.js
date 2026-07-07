import { exec } from "child_process";
import { sendSlackAlert } from "../utils/slack.js";

exec(
  "npx playwright test --grep @smoke --project=chromium",
  async (error, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);

    if (error) {
      try {
        await sendSlackAlert(
          "🚨 Smoke test failed. Check logs and screenshots.",
        );
      } catch (err) {
        console.error("Slack failed:", err.message);
      }

      process.exit(1);
    } else {
      console.log("✅ Test passed");
    }
  },
);
