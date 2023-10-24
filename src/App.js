import React, { useState } from "react";
import Button from "./components/Button";
import Textbox from "./components/Textbox";
import CustomizationPanel from "./components/CustomizationPanel";
import Card from "./components/Card";
import "@mantine/core/styles.css";
import { SimpleGrid, Box, Paper } from "@mantine/core";

const App = () => {
  // Separate state for Button
  const [buttonBgColor, setButtonBgColor] = useState("#000000");
  const [buttonTextColor, setButtonTextColor] = useState("#000000");
  const [buttonFontSize, setButtonFontSize] = useState(16);

  // Separate state for Textbox
  const [textboxBorderColor, setTextboxBorderColor] = useState("#000");
  const [textboxFontSize, setTextboxFontSize] = useState(16);

  return (
    <Paper padding="md">
      <h1>UI Library App</h1>
      <SimpleGrid cols={2}>
        <Box
          style={{
            borderRadius: "var(--mantine-radius-md)",
            flex: "1 1",
            padding: "var(--_demo-spacing,0)",
            border: "1px solid var(--mantine-color-gray-2)",
          }}
        >
          <SimpleGrid cols={2}>
            <Button
              label="Click Me"
              bgColor={buttonBgColor}
              textColor={buttonTextColor}
              fontSize={buttonFontSize}
            />
            <CustomizationPanel
              defaultBgColor={buttonBgColor}
              defaultTextColor={buttonTextColor}
              defaultFontSize={buttonFontSize}
              onBgColorChange={setButtonBgColor}
              onTextColorChange={setButtonTextColor}
              onFontSizeChange={setButtonFontSize}
            />
          </SimpleGrid>
        </Box>
        <Card>
          <Textbox bgColor={textboxBorderColor} fontSize={textboxFontSize} />
          <CustomizationPanel
            defaultBgColor={textboxBorderColor}
            defaultFontSize={textboxFontSize}
            onBorderColorChange={setTextboxBorderColor}
            onFontSizeChange={setTextboxFontSize}
          />
        </Card>
      </SimpleGrid>
    </Paper>
  );
};

export default App;
