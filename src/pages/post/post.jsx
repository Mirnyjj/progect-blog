import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent, PostForm} from "./components";
import { styled } from "styled-components";
import { useMatch, useParams } from "react-router";
import { useServerRequest } from "../../hooks";
import { RESET_POST_DATA, loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

const PostContainer = ({className}) => {
    const post = useSelector(selectPost);
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    const isEditing = useMatch('/post/:id/edit');
    const isCreating = useMatch('/post');

    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA);
    }, [dispatch, isCreating]);

    useEffect(() => {
        if (isCreating) {
            return;
        }
        dispatch(loadPostAsync(requestServer, params.id))
    }, [requestServer, dispatch, params.id, isCreating]);
    return (
        <div className={className}>
            {isEditing || isCreating ? (
                <PostForm post={post}/>
            ) : (
                <>
                    <PostContent post={post}/>
                    <Comments comments={post.comments} postId={post.id}/>
                </>
            )}
        </div>
    )
};

export const Post = styled(PostContainer)`
    padding: 0 80px;
    margin: 40px 0;
`;