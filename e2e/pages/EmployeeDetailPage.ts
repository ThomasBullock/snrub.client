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
    this.editButton = page.getByTestId("edit-employee-btn");
    this.backButton = page.getByTestId("back-btn");
    this.employeeName = page.getByTestId("employee-detail-name");
    this.employeeEmail = page.getByTestId("employee-detail-email");
    this.employeeRole = page.getByTestId("employee-detail-role");
    this.employeeStatus = page.getByTestId("employee-detail-status");
  }

  async goto(uid: string) {
    await this.page.goto(`/dashboard/employees/${uid}`);
  }
}
