import type { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
      use: {
            testIdAttribute:'id',
      },
      testMatch: ["tests/ripple.login.validation.ts"]
};

export default config;

