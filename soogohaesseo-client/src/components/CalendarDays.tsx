import styled from "styled-components";

const DaysFrame = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Day = styled.div`
    font-size: 10px;
    border-radius: 6px;
    flex: 1;
    &:not(&:last-child) {
        margin-right: 2px;
    }
    padding: 1px 6px;
    background-color: rgba(204, 204, 255, 0.5);
`;

const CalendarDays = () => {
    const days = ["Sun", "Mon", "Thu", "Wed", "Thurs", "Fri", "Sat"];
    
    return (
        <DaysFrame>
            {days.map(day => {
                return <Day>{day}</Day>; 
            })}
        </DaysFrame>
    );
}

export default CalendarDays;