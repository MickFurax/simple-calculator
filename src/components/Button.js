import { Delete, Divide, Minus, Percent, Plus, X, XCircle } from "react-feather";
import { Equal, Number0, Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9 } from "tabler-icons-react";

const Button = (props) => {
    const {onInput, handleClear, handleDelete, evaluate, handlePercent} = props;

    const color = "#00c3ff";

    return (
        <div>
            <div className="grid grid-cols-4">
                <button name="Clear" onClick={() => handleClear()}><XCircle color={color}/></button>
                <button name="Delete" onClick={() => handleDelete()}><Delete color={color}/></button>
                <button name="%" onClick={() => handlePercent()}><Percent color={color}/></button>
                <button name="/" onClick={() => onInput("/", false)}><Divide color={color}/></button>
                <button name="7" onClick={() => onInput("7", true)}><Number7 /></button>
                <button name="8" onClick={() => onInput("8", true)}><Number8 /></button>
                <button name="9" onClick={() => onInput("9", true)}><Number9 /></button>
                <button name="*" onClick={() => onInput("x", false)}><X color={color}/></button>
                <button name="4" onClick={() => onInput("4", true)}><Number4 /></button>
                <button name="5" onClick={() => onInput("5", true)}><Number5 /></button>
                <button name="6" onClick={() => onInput("6", true)}><Number6 /></button>
                <button name="-" onClick={() => onInput("-", false)}><Minus color={color}/></button>
                <button name="1" onClick={() => onInput("1", true)}><Number1 /></button>
                <button name="2" onClick={() => onInput("2", true)}><Number2 /></button>
                <button name="3" onClick={() => onInput("3", true)}><Number3 /></button>
                <button name="+" onClick={() => onInput("+", false)}><Plus color={color}/></button>
                <button name="0" onClick={() => onInput("0", true)} className="col-span-2"><Number0 /></button>
                <button name="." onClick={() => onInput(".", true)}><div className="w-6 h-6 text-2xl">.</div></button>
                <button name="=" onClick={() => evaluate()} className="bg-[#00c3ff] hover:bg-black"><Equal color="white"/></button>
            </div>
        </div>
    );
}

export default Button;