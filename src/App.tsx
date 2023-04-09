import { useState, useRef, useEffect } from 'react';
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
  });

  const [iconImage, setIconImage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObject = e.target.files?.[0];
    if (fileObject) {
      const url = URL.createObjectURL(fileObject);
      setIconImage(url);
    }
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


  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const formImg = new Image();
    img.src = selectImage;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.drawImage(formImg, 835, 355, 450, 450);
      ctx.font = 'bold 50px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(formData.name, 190, 385);
      ctx.fillText(formData.grade, 190, 495);
      ctx.fillText(formData.gender, 190, 605);
      ctx.fillText(formData.birthday, 230, 720);
      ctx.fillText(formData.freespace, 70, 1150);
      ctx.font = '200px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(formData.dmSelect, 770, 975);
      ctx.fillText(formData.lineSelect, 920, 975);
      ctx.fillText(formData.instagramSelect, 1120, 975);
    };
    formImg.src = iconImage;
  }, [formData, iconImage, selectImage]);

  //canvasをクリアする
  const handleCanvasClear = () => {
    window.location.reload();
    };

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
        handleCanvasClear={handleCanvasClear}
        handleCanvasSave={handleCanvasSave}
      />
      <Form
        form={formData}
        images={images}
        setSelectImage={setSelectImage}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleTextAreaChange={handleTextAreaChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default App;
