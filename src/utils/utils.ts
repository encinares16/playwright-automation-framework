import { expect, Locator } from "@playwright/test";

export async function waitForVisible(element: Locator,  timeout = 10000) {
  await expect(element).toBeVisible({ timeout })
}