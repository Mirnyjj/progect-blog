import { styled } from "styled-components";
import { Icon } from "../../../../../../components";

const CommentContainer = ({className, id, author, content, publishedAt}) => {
    return (
        <div className={className}>
            <div className="comment">
                <div className="infomation-panel">
                        <div className="author">
                            <Icon 
                            id="fa-user-circle-o" 
                            size="18px"
                            margin="0 10px 0 0"
                            onClick={(n) => n}
                            />
                            {author}
                        </div>
                        <div className="published-at">
                            <Icon 
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
                onClick={((n) => n)}
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