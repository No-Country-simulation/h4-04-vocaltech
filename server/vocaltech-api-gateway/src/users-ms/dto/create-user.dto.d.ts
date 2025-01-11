import { UserRole } from '../../common/Enum/enums';
export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
    role: UserRole;
}
