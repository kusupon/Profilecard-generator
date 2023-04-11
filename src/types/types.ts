export type FormDataType = {
    name: string
    grade: string
    gender: string
    birthday: string
    dmSelect: string
    lineSelect: string
    instagramSelect: string
    colorSelect: string
    freespace: string
    color: string
  }

export type FormHandletype = {
    form: FormDataType
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type HandleCanvasType = {
    handleCanvasClear:() => void;
    handleCanvasSave: () => void;
}
