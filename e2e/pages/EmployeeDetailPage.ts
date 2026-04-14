import { type Locator, type Page } from "@playwright/test";

export class EmployeeDetailPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly editButton: Locator;
  readonly backButton: Locator;
  readonly employeeName: Locator;
  readonly employeeEmail: Locator;
  readonly employeeRole: Locator;
  readonly employeeStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Employee Details", level: 1 });
    this.editButton = page.getByTestId("employees.detail.edit-btn");
    this.backButton = page.getByTestId("employees.detail.back-btn");
    this.employeeName = page.getByTestId("employees.detail.name");
    this.employeeEmail = page.getByTestId("employees.detail.email");
    this.employeeRole = page.getByTestId("employees.detail.role");
    this.employeeStatus = page.getByTestId("employees.detail.status");
  }

  async goto(uid: string) {
    await this.page.goto(`/dashboard/employees/${uid}`);
  }
}
