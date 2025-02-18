import { useForm } from "react-hook-form";
import { FORM_FIELDS, MESSAGES, API_ENDPOINTS } from "../lib/constants";

export const useContactForm = () => {
  const form = useForm();

  const submitForm = async (data) => {
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [FORM_FIELDS.NAME]: data[FORM_FIELDS.NAME],
          [FORM_FIELDS.EMAIL]: data[FORM_FIELDS.EMAIL],
          [FORM_FIELDS.MESSAGE]: data[FORM_FIELDS.MESSAGE],
        }),
      });

      if (response.ok) {
        alert(MESSAGES.SUCCESS);
        form.reset();
      } else {
        alert(MESSAGES.ERROR);
      }
    } catch (error) {
      alert(MESSAGES.SYSTEM_ERROR);
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    form,
    submitForm,
    handleClear,
  };
};
