import type { User } from "./user";

/**
 * Authentication response from the API
 */
export interface AuthResponse {
  access_token: string;
  user: User;
}

