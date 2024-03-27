import { SiriusText } from "./SiriusText";

export default {
  title: "Sirius Text",
  component: SiriusText,
};

export const SiriusTextSecondary = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
export const SiriusTextWarning = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const SiriusTextDanger = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const SiriusTextLink = {
  args: {
    type: "link",
    target: '_blank',
    href: "https://www.google.com",
    children: 'Go To Google'
  },
};
