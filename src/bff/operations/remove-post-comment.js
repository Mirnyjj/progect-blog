import { deleteComment, getComments, getPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { getPostCommentsWithAuthor } from "../utils";

export const removePostComment = async (hash, postId, id) => {
    const accessRole = [ROLE.ADMIN, ROLE.MODERATOR];
    console.log('userId, postId, content')


    const access = await sessions.access(hash, accessRole);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }
    console.log('userId, postId, content')

    await deleteComment(id);

    const post = await getPost(postId);

    const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

    return {
        error: null,
        res: {
            ...post,
            comments: commentsWithAuthor,
        },
    }

};