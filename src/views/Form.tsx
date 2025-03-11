import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types/types";
import { formFields, genderOptions } from "../constants/constants";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("formData ==> ", formData);
  };

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-5">
        <h1 className="capitalize text-2xl font-bold text-center">
          person information form
        </h1>
        {formFields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="capitalize block text-xs font-medium text-gray-700">
              {field.label}
            </label>
            {field.type !== "textarea" ? (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                placeholder={field.placeholder}
              />
            ) : (
              <textarea
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                placeholder={field.placeholder}></textarea>
            )}
          </div>
        ))}
        <div>
          <label className="capitalize block text-xs font-medium text-gray-700">
            Gender
          </label>
          <div className="space-x-4 mt-1 px-4 py-2">
            {genderOptions.map((option) => (
              <label
                key={option.value}
                className="capitalize text-xs inline-flex text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value={option.value}
                  checked={formData.gender === option.value}
                  onChange={handleChange}
                  className="mr-1"
                  required
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
