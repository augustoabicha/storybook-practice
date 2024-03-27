import { SiriusTextInput } from "./SiriusTextInput";

export default {
  title: "Sirius Text Input",
  component: SiriusTextInput,
};

export const SiriusTextInputDefault= {
    args: {
      placeholder: "Type Something",
    },
  };

export const SiriusTextInputPassword = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};