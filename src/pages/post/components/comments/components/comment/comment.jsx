import { styled } from "styled-components";
import { Icon } from "../../../../../../components";
import { CLOSE_MODAL, openModal, removeCommentAsync } from "../../../../../../actions";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../../../hooks";

const CommentContainer = ({className, postId, id, author, content, publishedAt}) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const onCommentRemove = (id) => {
        dispatch(openModal({
            text: 'Удалить комментарий?',
            onConfirm: () => {
                dispatch(removeCommentAsync(requestServer, postId, id));
                dispatch(CLOSE_MODAL);
            },
            onConcel: () => dispatch(CLOSE_MODAL),
        }))

    };
    return (
        <div className={className}>
            <div className="comment">
                <div className="infomation-panel">
                        <div className="author">
                            <Icon 
                            inactive={true}
                            id="fa-user-circle-o" 
                            size="18px"
                            margin="0 10px 0 0"
                            onClick={(n) => n}
                            />
                            {author}
                        </div>
                        <div className="published-at">
                            <Icon 
                            inactive={true}
                            id="fa-calendar-o" 
                            size="18px"
                            margin="0 10px 0 0"
                            onClick={(n) => n}
                            />
                            {publishedAt}
                        </div>
                    </div>
                    <div className="comment-text">
                        {content}
                    </div>
                </div>
            <Icon 
                id="fa-trash-o" 
                margin="0 0 0 10px"
                size="18px"
                onClick={(() => onCommentRemove(id))}
            />
          
        </div>
    )
};

export const Comment = styled(CommentContainer)`
    display: flex;
    margin-top: 10px;
    width: 100%;

    & .comment {
        width: 550px;
        border: 1px solid #000;
        padding: 5px 10px;
    }
    & .infomation-panel {
        display: flex;
        justify-content: space-between;

    }
    & .author {
        display: flex;
    }
    & .published-at {
        display: flex;
    }
`;