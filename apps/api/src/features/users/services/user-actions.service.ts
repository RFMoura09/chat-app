import { Injectable } from "@nestjs/common";
import { IUserService } from "../interfaces/user.service.interface";
import { User } from "@domain/entities/user.entity";

@Injectable()
export class UserActionsService implements Pick<IUserService, 'getUsers'> {
    getUsers(): Array<User> {
        throw new Error("Method not implemented.");
    }
}