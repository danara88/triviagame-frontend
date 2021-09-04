import { User } from "../models/user.model";

/**
 * Interface to register a new user
 */
export interface RegisterForm {
    fullName: string,
    email:    string,
    password: string
}

/**
 * This is the response of the register API
 */
export interface RegisterResponse {
    token: string,
    user: User
}