/// <reference types="cypress" />

describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="projects"]').first().click();
    cy.url().should("include", "/projects");
    cy.get("h2").contains("Projects");
  });
});

export {};
