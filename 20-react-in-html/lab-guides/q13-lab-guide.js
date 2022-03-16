const Calculator = () => {
    const number1 = useRef();
    const number2 = useRef();
    const sign = useRef();

    const calc = async (event) => {
        event.preventDefault();

        const calculator = {
            number1: number1.current.value,
            number2: number2.current.value,
            sign: sign.current.value,
        };
    };

    return (
        <div>
            <input type={number} ref={number1}></input>
            <input type={number} ref={number2}></input>
            <select ref={sign} onSelect={calc}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        </div>
    );
};

ReactDOM.render(
    <React.Fragment>
        <Calculator />
    </React.Fragment>,
    document.getElementById("root")
);
