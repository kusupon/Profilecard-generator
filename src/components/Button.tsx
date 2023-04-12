import { HandleCanvasType } from "../types/types";
const Button = ({ handleCanvasSave }: HandleCanvasType) => {
    return (
        <>
            <button onClick={handleCanvasSave}>保存用画像を作成</button>
        </>
    )
}

export default Button;