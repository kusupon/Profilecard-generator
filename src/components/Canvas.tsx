type Props = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  imageUrl: string;
};

const Canvas = ({ canvasRef, imageUrl }: Props) => {
  return (
    <>
    <h2>preview</h2>
      <div className='container'>
        <canvas className='canvas' ref={canvasRef} width="1414" height="1481" />
        {imageUrl && <div><h2>スマホ保存用↓(長押ししてね)</h2><img className="image" src={imageUrl} alt="Canvas" /></div>}
      </div>
    </>
  );
}

export default Canvas;