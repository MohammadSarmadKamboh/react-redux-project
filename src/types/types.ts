export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  // You can add more fields based on the API response
}
export interface UsersResponse {
  users: User[]; // The API returns an object with a users array
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
}

export interface FormField {
  id: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
}

export interface GenderOption {
  value: string;
  label: string;
}
