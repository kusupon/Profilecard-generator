import { FormHandletype } from "../types/types";
const Form = ({ form, handleFieldChange, handleImageChange }: FormHandletype) => {
    return (
        <div className='form'>
            <div className='inputArea'>
                <div className='formContent'><label>カードの色</label><input type="color" value={form.color} onChange={handleFieldChange} name="color" /></div>
                <div className='formContent'><label>文字の色</label><input type="color" value={form.fontColor} onChange={handleFieldChange} name="fontColor" /></div>
                <div className='formContent'><label>名前</label><input type="text" value={form.name} onChange={handleFieldChange} name="name" /></div>
                <div className='formContent'><label>学年</label><input type="text" value={form.grade} onChange={handleFieldChange} name="grade" /></div>
                <div className='formContent'><label>性別</label><input type="text" value={form.gender} onChange={handleFieldChange} name="gender" /></div>
                <div className='formContent'><label>誕生日</label><input type="text" value={form.birthday} onChange={handleFieldChange} name="birthday" /></div>
                <div className='formContent'>
                    {['DM', 'LINE', 'Instagram'].map((label) => (
                        <div className="selector" key={label}>
                            <label>{label}</label>
                            <select onChange={handleFieldChange} name={`${label.toLowerCase()}Select`}>
                                <option value="">選択 ▼</option>
                                <option value="◯">○</option>
                                <option value="X">x</option>
                            </select>
                        </div>
                    ))}
                </div>
                <div className='formContent'><label>フリースペース</label><textarea value={form.freespace} cols={40} rows={4} onChange={handleFieldChange} name="freespace" /></div>
                <div className='formContent'>アイコン<label className="file">画像を選択<input type="file" accept="image/*" onChange={handleImageChange}/></label></div>
            </div>
        </div>
    )
}

export default Form;