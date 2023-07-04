import {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';

interface TodoInputProps {
    index: number,
    onInsert: (text: string) => void;
}

const TodoInput = ({ index, onInsert }:TodoInputProps) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form onSubmit={onSubmit}>
            <input key={index} type="text" value={value} placeholder='할 일을 입력하세요' onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInput;