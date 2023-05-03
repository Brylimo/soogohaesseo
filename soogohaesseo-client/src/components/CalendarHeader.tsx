import styled from "styled-components";

const HeaderFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSideSpan = styled.span`
    color: var(--main-color);
    font-weight: bold;
    font-size: 25px;
    &:first-child {
        margin-right: 7px;
    }
`;

const YearSpan = styled.span`
    color: var(--main-color);
    font-weight: bold;
    font-size: 20px;
`;

interface CalendarHeaderProps {
    currentMonth: Date
}

const CalendarHeader = ({ currentMonth }: CalendarHeaderProps) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
    return (
        <HeaderFrame>
           <div>
                <LeftSideSpan>{monthNames[currentMonth.getMonth()]}</LeftSideSpan>
                <LeftSideSpan>{currentMonth.getDate()}</LeftSideSpan>
            </div> 
            <div>
                <YearSpan>{currentMonth.getFullYear()}</YearSpan>
            </div>
        </HeaderFrame>
    );
}

export default CalendarHeader;
