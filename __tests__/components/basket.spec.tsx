import { mount } from "@cypress/react";
import BasketComponent from "../../src/components/basket";
import "cypress-react-selector";

describe("Basket Component", () => {
  it("checks if component contains a svg", () => {
    mount(<BasketComponent />);

    cy.waitForReact();

    cy.getReact("BasketComponent").get("div").find("svg");
  });

  it("passes the className prop correctly", () => {
    const testClassName: string = "test string";
    mount(<BasketComponent className={testClassName} />);

    cy.waitForReact();

    cy.getReact("BasketComponent")
      .get("div")
      .eq(1)
      .children()
      .eq(0)
      .should("have.class", testClassName);
  });
});
