type Props = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
};

const Canvas = ({ canvasRef }: Props) => {
  return (
    <>
      <div className='container'>
        <canvas className='canvas' ref={canvasRef} width="1414" height="1481" />
      </div>
    </>
  );
}


export default Canvas;