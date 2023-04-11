import { FormHandletype } from "../types/types";
const Form = ({ form, handleInputChange, handleSelectChange, handleTextAreaChange, handleImageChange }: FormHandletype) => {
    return (
        <div className='form'>
            <div className='inputArea'>
                <div className='formContent'>アイコン<label className="file">画像を選択<input type="file" accept="image/*" onChange={handleImageChange}/></label></div>
                <div className='formContent'><label>カラー</label><input type="color" value={form.color} onChange={handleInputChange} name="color" /></div>
                <div className='formContent'><label>名前</label><input type="text" value={form.name} onChange={handleInputChange} name="name" /></div>
                <div className='formContent'><label>学年</label><input type="text" value={form.grade} onChange={handleInputChange} name="grade" /></div>
                <div className='formContent'><label>性別</label><input type="text" value={form.gender} onChange={handleInputChange} name="gender" /></div>
                <div className='formContent'><label>誕生日</label><input type="text" value={form.birthday} onChange={handleInputChange} name="birthday" /></div>
                <div className='formContent'>
                    {['DM', 'LINE', 'Instagram'].map((label) => (
                        <div className="selector" key={label}>
                            <label>{label}</label>
                            <select onChange={handleSelectChange} name={`${label.toLowerCase()}Select`}>
                                <option value="">選択 ▼</option>
                                <option value="○">○</option>
                                <option value="x">x</option>
                            </select>
                        </div>
                    ))}
                </div>
                <div className='formContent'><label>フリースペース</label><textarea value={form.freespace} cols={40} rows={4} onChange={handleTextAreaChange} name="freespace" /></div>
            </div>
        </div>
    )
}

export default Form;