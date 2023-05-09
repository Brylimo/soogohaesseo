import { useEffect } from "react";
import styled from "styled-components";

const TodoFrame = styled.div`
    border: 1px solid;
    min-height: 100px;
    width: 55%;
    margin-top: 48px;
    border-radius: 1rem;
`;

const TodoHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: space-between;
    padding: 20px;
`;

const TodoDay = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
`;

interface TodoProps {
    selectedDate: Date,
}

const Todo = ({ selectedDate }:TodoProps) => {
    const week = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    useEffect(() => {
        // @todo api call
    }, []);
    
    return (
        <TodoFrame>
            <TodoHeader>
                <TodoDay>
                    <span>{selectedDate.getFullYear()}년 {selectedDate.getMonth()+1}월 {selectedDate.getDate()}일</span>
                    <span>{week[selectedDate.getDay()]}</span>
                </TodoDay>
                <div>
                    할 일 0개 남음
                </div>
            </TodoHeader>
        </TodoFrame>
    );
}

export default Todo;