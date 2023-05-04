import { useState } from "react";
import styled from "styled-components";
import CalendarHeader from "../components/CalendarHeader";
import CalendarBody from "../components/CalendarBody";

const Frame = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

const CalendarFrame = styled.div`
    width: 55%;
    background-color: rgba(255, 235, 255, 0.7);
    padding: 1rem 2rem;
`;

const Calendar = () => {
    const [ currentMonth, setCurrentMonth ] = useState(new Date());
    const [ selectedDate, setSelectedDate ] = useState(new Date());

    return (
        <Frame>
            <CalendarFrame>
                <CalendarHeader currentMonth={currentMonth} />
                <CalendarBody currentMonth={currentMonth} selectedDate={selectedDate} />
            </CalendarFrame>
        </Frame>
    );
}

export default Calendar;