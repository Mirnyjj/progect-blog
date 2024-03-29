import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comments, PostContent, PostForm} from "./components";
import { styled } from "styled-components";
import {Error, PrivateContent} from "../../components"
import { useMatch, useParams } from "react-router";
import { useServerRequest } from "../../hooks";
import { RESET_POST_DATA, loadPostAsync } from "../../actions";
import { selectPost} from "../../selectors";
import { ROLE } from "../../constants";

const PostContainer = ({className}) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const post = useSelector(selectPost);
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    const isEditing = !!useMatch('/post/:id/edit');
    const isCreating = !!useMatch('/post');

    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA);
    }, [dispatch, isCreating]);

    useEffect(() => {
        if (isCreating) {
            setIsLoading(false)
            return;
        }
        
        dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
                setError(postData.error);
                setIsLoading(false);
        });
    }, [requestServer, dispatch, params.id, isCreating]);

    if(isLoading) {
        return null;
    };

    const SpecificPostPage = isEditing || isCreating ? (
        <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
            <div className={className}>
                <PostForm post={post}/>
            </div>
        </PrivateContent>
    ) : (
        <div className={className}>
            <PostContent post={post}/>
            <Comments comments={post.comments} postId={post.id}/>
        </div>
    );

    return error ? <Error error={error}/> : SpecificPostPage;
            
};

export const Post = styled(PostContainer)`
    padding: 0 80px;
    margin: 40px 0;
`;