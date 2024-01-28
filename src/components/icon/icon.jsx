import { styled } from "styled-components";

const IconConteiner = ({ className, id, ...props}) => (
    <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true"></i>   
    </div>
);

export const Icon = styled(IconConteiner)`
    font-size: ${({size = '25px'}) => size};
    margin: ${({margin = '0'}) => margin};
    color: ${({disabled}) => disabled ? '#ccc' : '#000'};
        &:hover {
        cursor: pointer; 
    }


`;