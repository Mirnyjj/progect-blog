import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constants";
import { selectUserRole } from "../../../../selectors";

const SpecialPanelContainer = ({className, id, publishedAt, editButton}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const requestServer = useServerRequest();
    const userRole = useSelector(selectUserRole);
    const onPostRemove = (id) => {
        dispatch(
            openModal({
            text: 'Удалить статью?',
            onConfirm: async () => {
                dispatch(removePostAsync(requestServer, id));
                navigate('/')
                dispatch(CLOSE_MODAL);
            },
            onConcel: () => dispatch(CLOSE_MODAL),
        }))

    };
    
    const isAdmin = checkAccess([ROLE.ADMIN], userRole);

    return (
        <div className={className}>
        <div className="published-at">
            {publishedAt && <Icon 
            inactive={true}
            id="fa-calendar-o" 
            margin="0 8px 0 0"
            size="18px"
            />}
        {publishedAt}
        </div>
        {isAdmin && <div className="buttons">
            {editButton}
            {publishedAt && <Icon 
            id="fa-trash-o" 
            size="21px"
            margin="0 0 0 8px"
            onClick={() => onPostRemove(id)}
            />}
        </div>}
    </div>
    )
};

export const SpecialPanel = styled(SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: ${({margin}) => margin};

    & .published-at {
        display: flex;
        font-size: 18px;

    };
    & i {
        position: relative;
        top: -2px;
    };
    & .buttons {
        display: flex;
    };

`