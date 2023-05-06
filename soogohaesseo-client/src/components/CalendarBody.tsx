import { addDays, endOfMonth, endOfWeek, format, isSameMonth, isSameDay, startOfMonth, startOfWeek } from "date-fns";
import styled, {css} from "styled-components";

const CalendarBodyFrame = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 14.28571%);
`;

const Day = styled.div`
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
    padding: 1px 6px;
    background-color: rgba(204, 204, 255, 0.5);
`;

const Cell = styled.div<{color?: string, bgColor?: string, flag?: boolean}>`
    width: 100%;
    position: relative;
    padding: 0.3rem;
    font-size: 16px;
    border-radius: 6px;
    color: ${(props) => props.color || '#21252a'};
    background-color: ${(props) => props.bgColor || 'transparent'};

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    &:hover {
        background-color: rgba(255, 210, 255, 0.9);
    }

    ${props => props.flag && css`
        pointer-events: none;
    `};
`;

const CellInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

interface CalendarBodyProps {
    currentMonth: Date,
    selectedDate: Date
}

interface CellBoxProps {
    dayx: string,
    color?: string,
    bgColor?: string,
    flag?: boolean
}

const CellBox = ({dayx, color, bgColor, flag }:CellBoxProps) => {
    return (
        <Cell color={color} bgColor={bgColor} flag={flag}>
            <CellInner>
                {dayx}
            </CellInner>
        </Cell>
    );
}

const CalendarBody = ({ currentMonth, selectedDate }: CalendarBodyProps) => {
    const week = ["Sun", "Mon", "Thu", "Wed", "Thurs", "Fri", "Sat"];
    const monthStart = startOfMonth(currentMonth); // 오늘이 속한 달의 시작일
    const monthEnd = endOfMonth(monthStart); // 오늘이 속한 달의 마지막일
    const startDate = startOfWeek(monthStart); // monthStart가 속한 주의 시작일
    const endDate = endOfWeek(monthEnd); // monthEnd가 속한 주의 마지막일

    let days = [];
    let day = startDate;

    while (day <= endDate) {
        days.push(day);
        day = addDays(day, 1);
    }

    return (
        <CalendarBodyFrame>
            {week.map((elem) => {
                return <Day key={elem}>{elem}</Day>;
            })}
            {days.map((dayx, index) => {
                return (
                    isSameMonth(dayx, monthStart) ? isSameDay(dayx, selectedDate) ? <CellBox key={index} dayx={format(dayx, 'd')} bgColor={"rgba(255, 225, 255, 0.7)"} /> : <CellBox key={index} dayx={format(dayx, 'd')} /> : <CellBox key={index} dayx={format(dayx, 'd')} color={"#dddcdb"} flag={true} />       
                );
            })}
        </CalendarBodyFrame>
    );
};

export default CalendarBody;