import { Button as MantineButton } from '@mantine/core';

const Button = ({ label, bgColor, textColor }) => {
  return (
    <MantineButton style={{ backgroundColor: bgColor, color: textColor }}>
      {label}
    </MantineButton>
  );
};

export default Button;
