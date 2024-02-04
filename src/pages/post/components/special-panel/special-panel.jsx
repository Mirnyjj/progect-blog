import { styled } from "styled-components";
import { Icon } from "../../../../components";

const SpecialPanelContainer = ({className, publishedAt, editButton}) => {
    return (
        <div className={className}>
        <div className="published-at">
            <Icon 
            id="fa-calendar-o" 
            margin="0 8px 0 0"
            size="18px"
            onClick={(n) => n}
            />
        {publishedAt}
        </div>
        <div className="buttons">
            {editButton}
            <Icon 
            id="fa-trash-o" 
            size="21px"
            onClick={(n) => n}
            />
        </div>
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