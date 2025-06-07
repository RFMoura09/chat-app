import { User } from "@domain/entities/user.entity";

export interface IUserService {
    getUsers(): Array<User>
}