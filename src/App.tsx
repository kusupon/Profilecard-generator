import { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import TItle from './components/Title';
import Form from './components/Form';
import Button from './components/Button';
import { FormDataType } from './types/types';
import image1 from './assets/profile1.jpg';
import image2 from './assets/profile2.jpg';
import image3 from './assets/profile3.jpg';
import image4 from './assets/profile4.jpg';
import './App.css';


function App() {
  const canvasRef = useRef(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    grade: "",
    gender: "",
    birthday: "",
    dmSelect: "",
    lineSelect: "",
    instagramSelect: "",
    colorSelect: "",
    freespace: "",
  });

  const [selectImage, setSelectImage] = useState<string>(image1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


const images = [
    {
        url: image1,
        label: "青",
    },
    {
        url: image2,
        label: "ピンク",
    },
    {
        url: image3,
        label: "オレンジ",
    },
    {
        url: image4,
        label: "緑",
    },
];
    //テキストを描画する
    const handleCanvasDraw = () => {
      const canvas:any = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = selectImage
      img.onload = () => {
          ctx.drawImage(img, 0, 0);
          ctx.font = 'bold 50px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(formData.name, 190, 385);
          ctx.fillText(formData.grade, 190, 495);
          ctx.fillText(formData.gender, 190, 605);
          ctx.fillText(formData.birthday, 230, 720);
          ctx.fillText(formData.freespace, 70, 1150)
          ctx.font = '200px Arial';
          ctx.fillStyle = 'red';
          ctx.fillText(formData.dmSelect, 770, 975);
          ctx.fillText(formData.lineSelect, 920, 975);
          ctx.fillText(formData.instagramSelect, 1120, 975);
      };
  };

  //canvasをクリアする
  const handleCanvasClear = () => {
      const canvas:any = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setFormData({
          name: "",
          grade: "",
          gender: "",
          birthday: "",
          dmSelect: "",
          lineSelect: "",
          instagramSelect: "",
          colorSelect: "",
          freespace: ""
      });
  };

  //画像を保存
  const handleCanvasSave = () => {
      const canvas: any = canvasRef.current;
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'card.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div className='wrapper'>
      <TItle />
      <Form 
        form={formData} 
        images={images}
        setSelectImage={setSelectImage}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleTextAreaChange={handleTextAreaChange}
      />
      <Button 
        handleCanvasDraw={handleCanvasDraw}
        handleCanvasClear={handleCanvasClear}
        handleCanvasSave={handleCanvasSave}
      />
      <Canvas canvasRef={canvasRef} />
    </div>
  );
}

export default App;