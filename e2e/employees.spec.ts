import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage.js";
import { EmployeesPage } from "./pages/EmployeesPage.js";
import { EmployeeDetailPage } from "./pages/EmployeeDetailPage.js";
import { EmployeeEditPage } from "./pages/EmployeeEditPage.js";

const TEST_USER = {
  email: process.env.E2E_TEST_USER_EMAIL!,
  password: process.env.E2E_TEST_USER_PASSWORD!,
};

const TABLE_COLUMNS = ["Photo", "Name", "Email", "Role", "Actions"];

test.describe("Employees page", () => {
  let employeesPage: EmployeesPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(TEST_USER.email, TEST_USER.password);
    await expect(page).toHaveURL(/\/dashboard/);

    employeesPage = new EmployeesPage(page);
  });

  test("sidebar team link navigates to employees page", async ({ page }) => {
    await employeesPage.sidebar.navigateTo(employeesPage.sidebar.teamLink);

    await expect(page).toHaveURL(/\/dashboard\/employees/);
    await expect(employeesPage.heading).toBeVisible();
  });

  test("employees table renders with correct columns", async () => {
    await employeesPage.goto();

    for (const column of TABLE_COLUMNS) {
      await expect(
        employeesPage.employeesTable.getByRole("columnheader", { name: column }),
      ).toBeVisible();
    }
  });

  test("logged in user email is visible in table", async () => {
    await employeesPage.goto();

    await expect(
      employeesPage.employeesTable.getByRole("cell", { name: TEST_USER.email }),
    ).toBeVisible();
  });

  test("delete button opens confirm dialog", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline delete buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();

    await employeesPage.getDeleteButton(0).click();

    await expect(employeesPage.deleteConfirmDialog).toBeVisible();
    await expect(employeesPage.deleteConfirmDialog).toContainText(
      "Are you sure you want to delete this employee?",
    );
  });

  test("view button navigates to employee detail page", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();

    await employeesPage.getViewButton(0).click();

    await expect(page).toHaveURL(/\/dashboard\/employees\/[\w-]+$/);
    const detailPage = new EmployeeDetailPage(page);
    await expect(detailPage.heading).toBeVisible();
  });
});

test.describe("Employee detail page", () => {
  let employeesPage: EmployeesPage;
  let detailPage: EmployeeDetailPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(TEST_USER.email, TEST_USER.password);
    await expect(page).toHaveURL(/\/dashboard/);

    employeesPage = new EmployeesPage(page);
    detailPage = new EmployeeDetailPage(page);
  });

  test("displays employee profile information", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();
    await employeesPage.getViewButton(0).click();

    await expect(detailPage.heading).toBeVisible();
    await expect(detailPage.employeeName).toBeVisible();
    await expect(detailPage.employeeEmail).toBeVisible();
    await expect(detailPage.employeeRole).toBeVisible();
    await expect(detailPage.employeeStatus).toBeVisible();
  });

  test("edit button navigates to edit page", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();
    await employeesPage.getViewButton(0).click();

    await expect(detailPage.editButton).toBeVisible();
    await detailPage.editButton.click();

    await expect(page).toHaveURL(/\/dashboard\/employees\/[\w-]+\/edit$/);
    const editPage = new EmployeeEditPage(page);
    await expect(editPage.heading).toBeVisible();
  });

  test("back button returns to employees list", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();
    await employeesPage.getViewButton(0).click();

    await detailPage.backButton.click();

    await expect(page).toHaveURL(/\/dashboard\/employees$/);
    await expect(employeesPage.heading).toBeVisible();
  });
});

test.describe("Employee edit page", () => {
  let employeesPage: EmployeesPage;
  let editPage: EmployeeEditPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(TEST_USER.email, TEST_USER.password);
    await expect(page).toHaveURL(/\/dashboard/);

    employeesPage = new EmployeesPage(page);
    editPage = new EmployeeEditPage(page);
  });

  test("loads with employee data pre-filled", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();
    await employeesPage.getViewButton(0).click();

    const detailPage = new EmployeeDetailPage(page);
    await detailPage.editButton.click();

    await expect(editPage.heading).toBeVisible();
    await expect(editPage.emailInput).not.toBeEmpty();
    await expect(editPage.nameInput).not.toBeEmpty();
  });

  test("cancel returns to detail page", async ({ page }) => {
    test
      .info()
      .annotations.push({ type: "viewport", description: "xl required for inline action buttons" });
    await page.setViewportSize({ width: 1400, height: 720 });
    await employeesPage.goto();
    await employeesPage.getViewButton(0).click();

    const detailPage = new EmployeeDetailPage(page);
    await detailPage.editButton.click();

    await editPage.cancelButton.click();

    await expect(page).toHaveURL(/\/dashboard\/employees\/[\w-]+$/);
    await expect(detailPage.heading).toBeVisible();
  });
});
