import { useCallback, useState } from "react";
import styled from "styled-components";
import CalendarHeader from "../components/CalendarHeader";
import CalendarBody from "../components/CalendarBody";
import { addMonths, subMonths } from "date-fns";
import Todo from "../components/Todo";

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
`;

const CalendarFrame = styled.div`
    width: 55%;
    background-color: rgba(255, 235, 255, 0.7);
    padding: 1rem 2rem;
`;

const Calendar = () => {
    const [ currentMonth, setCurrentMonth ] = useState(new Date());
    const [ selectedDate, setSelectedDate ] = useState(new Date());

    const prevMonth = useCallback(() => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }, [currentMonth]);
    const nextMonth = useCallback(() => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }, [currentMonth]);

    return (
        <Frame>
            <CalendarFrame>
                <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
                <CalendarBody currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </CalendarFrame>

            <Todo selectedDate={selectedDate} />
        </Frame>
    );
}

export default Calendar;