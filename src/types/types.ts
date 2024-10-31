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
