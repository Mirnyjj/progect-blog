import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent } from "./components";
import { styled } from "styled-components";
import { useParams } from "react-router";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";

const PostContainer = ({className}) => {
    const post = useSelector(selectPost);
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))
    }, [requestServer, dispatch, params.id]);
    return (
        <div className={className}>
            <PostContent post={post}/>
            <Comments comments={post.comments} postId={post.id}/>
        </div>
    )
};

export const Post = styled(PostContainer)`
    padding: 0 80px;
    margin: 40px 0;
`;