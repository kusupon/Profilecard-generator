import { HandleCanvasType } from "../types/types";
const Button = ({ handleCanvasClear, handleCanvasSave }: HandleCanvasType) => {
    return (
        <>
            <button onClick={handleCanvasClear}>リセット</button>
            <button onClick={handleCanvasSave}>保存用画像を作成(スマホ用)</button>
        </>
    )
}

export default Button;