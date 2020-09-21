import React from "react";
import { render, getByTestId } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000}
        temperature={13}
        description="mockDescription"
        icon="800"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByTestId } = render(
      <ForecastSummary
        date={1525046400000}
        temperature={13}
        description="mockDescription"
        icon="200"
      />
    );

    expect(getByTestId("date-id")).toHaveClass("date");
    expect(getByTestId("icon-id")).toHaveClass("icon");
    expect(getByTestId("temperature-id")).toHaveClass("temperature");
    expect(getByTestId("description-id")).toHaveClass("description");
  });
});
