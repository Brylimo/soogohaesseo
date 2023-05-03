import styled from "styled-components";

const DaysFrame = styled.div`
    display: flex;
`;

const Days = () => {
    const days = ["Sun", "Mon", "Thu", "Wed", "Thurs", "Fri", "Sat"];
    
    return (
        <DaysFrame>
            {days.map(day => {
                return <div>{day}</div>; 
            })}
        </DaysFrame>
    );
}

export default Days;