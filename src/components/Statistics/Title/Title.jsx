import PropTypes from 'prop-types';
import { StatisticsTitle } from '../StatisticsStyled';


export const Title = ({title}) => {  // якщо заголовок не передано, но його не рендеримо
    if(!title) {
        return null;
    }
    return (
        <StatisticsTitle>{title}</StatisticsTitle>
    );
}

Title.propTypes = {
    title: PropTypes.string,
}