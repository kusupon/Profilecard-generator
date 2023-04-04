import { HandleCanvasType } from "../types/types";
const Button = ({ handleCanvasDraw, handleCanvasClear, handleCanvasSave }: HandleCanvasType) => {
    return (
        <>
            <button onClick={handleCanvasDraw}>作成!</button>
            <button onClick={handleCanvasClear}>リセット</button>
            <button onClick={handleCanvasSave}>保存</button>
        </>
    )
}

export default Button;