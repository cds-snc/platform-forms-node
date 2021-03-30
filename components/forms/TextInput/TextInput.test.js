import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Form from "../Form/Form";
import { GenerateElement } from "../../../lib/formBuilder";

const textInputData = {
  id: "1",
  type: "textField",
  properties: {
    titleEn: "What is your full name?",
    titleFr: "Quel est votre nom complet?",
    placeholderEn: "I wish I knew",
    placeholderFr: "Je ne sais pas",
    descriptionEn: "This is a description",
    descriptionFr: "Voice une description",
    validation: {
      required: true,
    },
  },
};

describe("Generate a text input", () => {
  afterEach(cleanup);
  test("...in English", () => {
    render(
      <Form t={(key) => key}>
        <GenerateElement element={textInputData} language="en" />
      </Form>
    );
    // Label properly renders
    expect(screen.getByLabelText(textInputData.properties.titleEn)).toBeInTheDocument();
    // Description properly render
    expect(screen.getByText(textInputData.properties.descriptionEn)).toBeInTheDocument();
    // Placeholder properly renders
    expect(screen.getByPlaceholderText(textInputData.properties.placeholderEn)).toBeInTheDocument();
    // Field marked as required
    expect(screen.getByRole("textbox")).toBeRequired();
  });
  test("...in French", () => {
    render(
      <Form t={(key) => key}>
        <GenerateElement element={textInputData} language="fr" />
      </Form>
    );
    // Label properly renders
    expect(screen.getByLabelText(textInputData.properties.titleFr)).toBeInTheDocument();
    // Description properly render
    expect(screen.getByText(textInputData.properties.descriptionFr)).toBeInTheDocument();
    // Placeholder properly renders
    expect(screen.getByPlaceholderText(textInputData.properties.placeholderEn)).toBeInTheDocument();
    // Field marked as required
    expect(screen.getByRole("textbox")).toBeRequired();
  });
});
