import React from "react";
import { useContactForm } from "../hooks/useContactForm";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { FORM_FIELDS } from "../lib/constants";
import { formValidations } from "../lib/validations";

function ContactForm() {
  const { form, submitForm, handleClear } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="w-full max-w-2xl p-6">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <Input
            label={FORM_FIELDS.NAME}
            type="text"
            id={FORM_FIELDS.NAME}
            placeholder="お名前を入力してください"
            register={register}
            rules={formValidations[FORM_FIELDS.NAME]}
            error={errors[FORM_FIELDS.NAME]}
          />

          <Input
            label={FORM_FIELDS.EMAIL}
            type="email"
            id={FORM_FIELDS.EMAIL}
            placeholder="メールアドレスを入力してください"
            register={register}
            rules={formValidations[FORM_FIELDS.EMAIL]}
            error={errors[FORM_FIELDS.EMAIL]}
          />

          <TextArea
            label={FORM_FIELDS.MESSAGE}
            id={FORM_FIELDS.MESSAGE}
            placeholder="本文を入力してください"
            register={register}
            rules={formValidations[FORM_FIELDS.MESSAGE]}
            error={errors[FORM_FIELDS.MESSAGE]}
          />
        </div>

        <div className="flex space-x-4 justify-center mt-5">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          >
            {"送信"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="mt-4 px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-600 hover:text-white"
          >
            {"クリア"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
