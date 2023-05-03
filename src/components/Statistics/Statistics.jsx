import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsList, StatisticsCell, StatisticsValue } from './StatisticsStyled';
import { Title } from './Title/Title';
import { getRandomHexColor } from '../../utils/RandomColor';

export const Statistics = ({stats}) => {   
    return (
        <StatisticsContainer>  
            <Title title="Upload stats"/>
            <StatisticsList>
                {stats.map(({ id, label, percentage } ) => (
                    <StatisticsCell key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <StatisticsValue>{label}</StatisticsValue>
                        <StatisticsValue $bigger>{percentage}%</StatisticsValue>
                    </StatisticsCell>
                ))}
            </StatisticsList>
        </StatisticsContainer>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}