import { useState } from "react";
import { Icon } from "../../../../components";
import { styled } from "styled-components";
import { Comment } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";

const CommentsContainer = ({className, comments, postId}) => {
    const [newComment, setNewComment] = useState('')
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const requestServer = useServerRequest()
    const onNewCommentAdd = (userId, postId, content) => {
        dispatch(addCommentAsync(requestServer, userId, postId, content));
        setNewComment('')
    };
    return (
        <div className={className}>
            <div className="new-comment">
                <textarea
                name="comment" 
                value={newComment} 
                placeholder="Комментарий..." 
                onChange={(({target}) => setNewComment(target.value))}
                >

                </textarea>
                <Icon 
                    id="fa-paper-plane-o" 
                    margin="0 0 0 10px"
                    size="18px"
                    onClick={( ) => onNewCommentAdd(userId, postId, newComment)}
                />
            </div>
            <div className="comments">
                {comments.map(({id, author, content, publishedAt}) => (
                    <Comment 
                    key={id} 
                    postId={postId}
                    id={id} 
                    author={author} 
                    content={content} 
                    publishedAt={publishedAt} 
                    />
                ))}
            </div>
        </div>
    )
};

export const Comments = styled(CommentsContainer)`
    margin: 0 auto;
    width: 580px;
    & .new-comment {
        display: flex;
        width: 100%;
        margin: 20px 0 0;
    }
    & .new-comment textarea {
        width: 550px;
        height: 120px;
        resize: none;
        font-size: 18px;
    }
`;