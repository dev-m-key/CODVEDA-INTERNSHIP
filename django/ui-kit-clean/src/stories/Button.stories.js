// Button.stories.jsx
import React from "react";
import Button from "./Button";

export default { title: "Components/Button", component: Button };

export const Primary = () => <Button variant="primary">Click Me</Button>;
export const Disabled = () => <Button disabled>Can't Click</Button>;
