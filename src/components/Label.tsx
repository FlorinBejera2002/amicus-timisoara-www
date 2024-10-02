type IProps = {
  text: string
}

export const Label = ({ text }: IProps) => (
  <label className="font-medium text-gray-500 pb-2">{text}</label>
)
