import { pool } from "config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

//DAO
export class USerStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = `SELECT id, username, created_at as "createdAt",
        last_signin as "lastSignin", s. id as "statusId", s.description,
        r.id as "roleId", r.description as "role", p.name, p.surname,
        p.lastname FROM user ORDER BY id DESC`;
        const {rows: userRows} = await pool.query(query);
        return userRows.map((user)=> <TUser>user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}