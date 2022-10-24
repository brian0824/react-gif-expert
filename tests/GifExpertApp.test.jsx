import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Prueba componentes", () => {
    //render(<GifExpertApp onAddCategory={() => {}} />);
    render(<GifExpertApp />);
    screen.debug();
  });
});
