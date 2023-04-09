import { HandleCanvasType } from "../types/types";
const Button = ({ handleCanvasClear, handleCanvasSave }: HandleCanvasType) => {
    return (
        <>
            <button onClick={handleCanvasClear}>リセット</button>
            <button onClick={handleCanvasSave}>保存</button>
        </>
    )
}

export default Button;