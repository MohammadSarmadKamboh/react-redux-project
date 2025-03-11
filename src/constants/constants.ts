import { FormField, GenderOption } from "../types/types";


export const formFields: FormField[] = [
  {
    id: "fullName",
    label: "full name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: "email",
    label: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "phone",
    label: "phone number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "dob",
    label: "date of birth",
    type: "date",
    placeholder: "Enter your date of birth",
  },
  {
    id: "address",
    label: "address",
    type: "textarea",
    placeholder: "Enter your address",
  },
];

export const genderOptions: GenderOption[] = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
  { value: "other", label: "other" },
];
