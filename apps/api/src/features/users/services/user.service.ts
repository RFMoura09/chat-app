import { Injectable } from "@nestjs/common";
import { IUserService } from "../interfaces/user.service.interface";
import { UserActionsService } from "./user-actions.service";
import { User } from "@domain/entities/user.entity";

@Injectable()
export class UserService implements IUserService {
    constructor(
        private readonly userActions: UserActionsService
    ) {}

    getUsers(): Array<User> {
        return this.userActions.getUsers()
    }
}