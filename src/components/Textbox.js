import { TextInput } from '@mantine/core';

const Textbox = ({ borderColor, fontSize, textColor }) => {
  return (
    <TextInput
      style={{ borderColor, fontSize: `${fontSize}px`, color: textColor }}
    />
  );
};

export default Textbox;
