import { RiSendPlaneFill } from 'react-icons/ri'

type IProps = {
  text: string
}

export const Button = ({ text }: IProps) => (
  <button
    className="flex items-center gap-2 text-white rounded-md bg-[#ed1c24] px-7 py-3 font-semibold hover:bg-red-600"
    type="submit"
  >
    <RiSendPlaneFill />
    {text}
  </button>
)
