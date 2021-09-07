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
export interface RegisterAuthResponse {
    token: string,
    user: User
}

/**
 * These fields are sent to the API Login
 */
export interface LoginRequest {
    email: string,
    password: string
}