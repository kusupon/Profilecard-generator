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
    handleFieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type HandleCanvasType = {
    handleCanvasSave: () => void;
}
