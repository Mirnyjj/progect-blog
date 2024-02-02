import { addComment, getComments, getPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const addPostComment = async (hash, userId, postId, content) => {
    const accessRole = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
    console.log('userId, postId, content')


    const access = await sessions.access(hash, accessRole);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }
    console.log('userId, postId, content')

    await addComment(userId, postId, content);

    const post = await getPost(postId);

    const comments = await getComments(postId);

    return {
        error: null,
        res: {
            ...post,
            comments,
        },
    }

};