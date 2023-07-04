import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";

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
    margin-bottom: 10px;
`;
const TodoNum = styled.div`
    font-size: 18px;
`;
const TodaySpan = styled.span`
    font-weight: bold;
    font-size: 3.2rem;
`;

const DaySpan = styled.span`
    font-size: 23px;
`;

const TodoBody = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
`;

const TodoCell = styled.div`
    display: flex;
    gap: 5px;
`;

interface TodoProps {
    selectedDate: Date,
}

const Todo = ({ selectedDate }:TodoProps) => {
    const [todos, setTodos] = useState(["hello my friend", "ohho"]);
    const [inputCount, setInputCount] = useState(0);

    const week = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    
    useEffect(() => {
        // @todo api call
    }, []);

    const onInsert = useCallback(
        (text: string) => {
            setTodos(todos => todos.concat(text));
            setInputCount(prevCount => prevCount - 1);
        },
        []
    );

    const addTodoCell = () => {
        setInputCount(prevCount => prevCount + 1);
    }

    const deleteTodo = () => {
        console.log("delete this todo");
    }
    
    return (
        <TodoFrame>
            <TodoHeader>
                <TodoDay>
                    <TodaySpan>{selectedDate.getFullYear()}년 {selectedDate.getMonth()+1}월 {selectedDate.getDate()}일</TodaySpan>
                    <DaySpan>{week[selectedDate.getDay()]}</DaySpan>
                </TodoDay>
                <TodoBody>
                    {
                        todos.map((todo, index) => (
                            <TodoCell key={index}>
                                <input type="checkbox" />
                                <span>{todo}</span>
                                <button onClick={deleteTodo}>삭제</button>
                            </TodoCell>
                        ))
                    }
                    {Array.from({ length: inputCount }).map((_, index) => (
                        <TodoInput index={index} onInsert={onInsert} />
                    ))}
                    <button onClick={addTodoCell}>추가</button>
                </TodoBody>
                {/*<TodoNum>
                    할 일 0개 남음
                </TodoNum>*/}
            </TodoHeader>
        </TodoFrame>
    );
}

export default Todo;