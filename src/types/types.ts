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
  }

export type FormHandletype = {
    form: FormDataType
    images: {
        url: any;
        label: string;
    }[]
    setSelectImage: React.Dispatch<React.SetStateAction<string>>
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type HandleCanvasType = {
    handleCanvasDraw: () => void;
    handleCanvasClear:() => void;
    handleCanvasSave: () => void;
}
