import { SiriusCard } from "./SiriusCard";

export default {
  title: "Sirius Card",
  component: SiriusCard,
};

export const BorderedCard = {
  args: {
    title: "Bordered Card",
    bordered: true,
    children: <p>SOME INFORMATION</p>
  },
};

export const StyledCard = {
    args: {
      title: "Styled Card",
      children: <p>SOME INFORMATION</p>,
      style: { backgroundColor: '#FF09' }
    },
  };
