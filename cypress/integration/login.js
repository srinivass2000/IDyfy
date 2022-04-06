describe("login test", function () {
  it("visits the login page", function () {
    cy.visit("https://idyfy.tech");

    cy.contains("Log In").click();

    cy.get("input[name='email']")
      .type("talaulikarsrinivass@outlook.com")
      .should("have.value", "talaulikarsrinivass@outlook.com");

    cy.get("input[name='password']")
      .type("anish2000")
      .should("have.value", "anish2000");

    cy.get("button[type='submit']").click();

    cy.url().should("include", "/feed");
  });
});
