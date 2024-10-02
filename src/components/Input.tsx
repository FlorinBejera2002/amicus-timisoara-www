type IProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  restProps: any
  isTextArea?: boolean
}

export const Input = ({ restProps, isTextArea }: IProps) =>
  isTextArea ? (
    <textarea
      className="rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-md w-full"
      rows={2}
      {...restProps}
    />
  ) : (
    <input
      className="rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-md w-full"
      {...restProps}
    />
  )
