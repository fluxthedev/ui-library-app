import React from "react";
import { ColorInput, Space, Paper, Stack } from "@mantine/core";

const CustomizationPanel = ({
  defaultBgColor,
  defaultTextColor,
  defaultFontSize,
  onBgColorChange,
  onBorderColorChange,
  onTextColorChange,
  onFontSizeChange,
}) => {
  return (
    <>
      <Stack h={300} justify="flex-start" gap="sm">
        <Paper padding="md">
          {onBgColorChange && (
            <>
              <label>
                Background Color:
                <ColorInput
                  value={defaultBgColor}
                  onChange={(e) => onBgColorChange(e)}
                />
              </label>
              <Space h="xs" />
            </>
          )}
        </Paper>
        <Paper padding="md">
          {onBorderColorChange && (
            <>
              <label>
                Border Color:
                <input
                  type="color"
                  value={defaultBgColor}
                  onChange={(e) => onBorderColorChange(e.target.value)}
                />
              </label>
              <Space h="xs" />
            </>
          )}
        </Paper>
        <Paper>
          {onTextColorChange && (
            <>
              <label>
                Text Color:
                <input
                  value={defaultTextColor}
                  type="color"
                  onChange={(e) => onTextColorChange(e.target.value)}
                />
              </label>
              <Space h="xs" />
            </>
          )}
        </Paper>
        <Paper>
          {onFontSizeChange && (
            <label>
              Font Size:
              <input
                value={defaultFontSize}
                type="number"
                onChange={(e) => onFontSizeChange(parseInt(e.target.value, 10))}
              />
            </label>
          )}
        </Paper>
      </Stack>
    </>
  );
};

export default CustomizationPanel;
