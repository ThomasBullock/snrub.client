import { type Locator, type Page } from "@playwright/test";

export class EmployeeEditPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly nameInput: Locator;
  readonly roleSelect: Locator;
  readonly statusSelect: Locator;
  readonly updateButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Edit Employee Details", level: 1 });
    this.emailInput = page.getByTestId("employees.edit-form.email-input");
    this.nameInput = page.getByTestId("employees.edit-form.name-input");
    this.roleSelect = page.getByTestId("employees.edit-form.role-select");
    this.statusSelect = page.getByTestId("employees.edit-form.status-select");
    this.updateButton = page.getByTestId("employees.edit-form.update-btn");
    this.cancelButton = page.getByTestId("employees.edit-form.cancel-btn");
  }

  async goto(uid: string) {
    await this.page.goto(`/dashboard/employees/${uid}/edit`);
  }
}
