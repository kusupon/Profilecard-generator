import { useState, useRef, useEffect } from 'react';
import Canvas from './components/Canvas';
import TItle from './components/Title';
import Form from './components/Form';
import Button from './components/Button';
import { FormDataType } from './types/types';
import './App.css';
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    color: "#CCF7FF"
  });

  const [iconImage, setIconImage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObject = e.target.files?.[0];
    if (fileObject) {
      const url = URL.createObjectURL(fileObject);
      setIconImage(url);
    }
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = iconImage;
    img.onload = () => {
      ctx.drawImage(img, 835, 355, 450, 450);
    }
    ctx.fillStyle = formData.color;
    ctx.fillRect(0,0, 1400, 1400);
    ctx.fillStyle = formData.color;
    ctx.font = '40px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('名前:', 80,385);
    ctx.fillText('学年:', 80, 500);
    ctx.fillText('性別:', 80,600);
    ctx.fillText('誕生日:', 80, 720);
    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('DM / LINE / Instagram', 790, 935)
    ctx.font = '110px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText('N/S Profile', 680, 200);
    ctx.font = '80px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Free Space', 80, 1060)
    ctx.font = '50px Arial';
    ctx.fillStyle = 'black white-space:pre-wrap';
    ctx.fillText('ーーーーーーーーーー', 80, 430);
    ctx.fillText('ーーーーーーーーーー', 80, 550);
    ctx.fillText('ーーーーーーーーーー', 80, 650);
    ctx.fillText('ーーーーーーーーーー', 80, 770);
    ctx.fillText(formData.name, 190, 385);
    ctx.fillText(formData.grade, 190, 495);
    ctx.fillText(formData.gender, 190, 605);
    ctx.fillText(formData.birthday, 230, 720);
    ctx.fillText(formData.freespace, 70, 1150);
    ctx.font = '100px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText(formData.dmSelect, 770, 975);
    ctx.fillText(formData.lineSelect, 920, 975);
    ctx.fillText(formData.instagramSelect, 1120, 975);
  }, [formData, iconImage]);
  
  //保存用画像を作成
  const handleCanvasSave = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.toBlob((blob: Blob | null) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        }
      });
    }
  };

  return (
    <div className='wrapper'>
      <TItle />
      <Canvas canvasRef={canvasRef}  imageUrl={imageUrl}/>
      <Button
        handleCanvasSave={handleCanvasSave}
      />
      <Form
        form={formData}
        handleFieldChange={handleFieldChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default App;
