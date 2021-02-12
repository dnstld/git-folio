import tw from 'twin.macro'

export const Content = tw.div`
  flex justify-center w-full
`
export const Wrapper = tw.div`
  w-full max-w-md lg:max-w-2xl
`
export const Label = tw.label`
  block text-xs font-semibold uppercase mb-1
`
export const InputContainer = tw.div`
  flex
`
export const Input = tw.input`
  appearance-none rounded-l p-2 lg:p-4 border-t mr-0 border-b border-l text-primary lg:text-xl border-gray-200 bg-white w-full focus:outline-none
`
export const Button = tw.button`
  flex items-center tracking-widest px-8 lg:px-16 rounded-r bg-green-500 text-white lg:text-xl font-bold p-2 lg:p-4 uppercase border-green-500 border-t border-b border-r
`
