import { SiriusButton } from "./SiriusButton";

export default {
  title: "Sirius Button",
  component: SiriusButton,
};

export const Primary = {
  args: {
    type: "primary",
    children: "Primary",
  },
};

export const Dashed = {
  args: {
    type: "dashed",
    children: "Dashed",
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading = {
  args: {
    children: "Loading",
    loading: true,
  },
};
