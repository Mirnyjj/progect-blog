import { addUser } from "./add-user";
import { createSession } from "./create-session";
import { getUser } from "./get-user";

export const server = {
   async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin);

        if(!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            }
        }

        if(authPassword === user.password) {
            return {
                error: 'Неверный пароль',
                res: null,
            }
        }

        return {
            error: null,
            res: createSession(user.role_id),
        }

    },
    async register(reghLogin, regPassword) {

        const user = await getUser(reghLogin);

        if(user) {
            return {
                error: 'Такой пользователь уже зарегистрирован',
                res: null,
            }
        }

        await addUser(reghLogin, regPassword);

        return {
            error: null,
            res: createSession(user.role_id),
        }

    }
};