import notes from "../assets/notes.png";
import doubleClick from "../assets/double-tick.png";
import plusImg from "../assets/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput("");
    };

    const completeHandler = () => {
        dispatch(allCompleted());
    };

    const clearHandler = () => {
        dispatch(clearCompleted());
    };
    return (
        <div>
            {/* <!-- header --> */}
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
                <img src={notes} className="w-6 h-6" alt="Add todo" />
                <input
                    value={input}
                    onChange={handleInput}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button type="submit" className="w-8 h-8">
                    <img src={plusImg} />
                </button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
                    <img className="w-4 h-4" src={doubleClick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={clearHandler} className="cursor-pointer">
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default Header;
