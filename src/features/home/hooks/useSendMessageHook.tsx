import sendMail from '@/utils/actions'
import toast from 'react-hot-toast'
import { useState } from 'react'

const useSendMessageHook = () => {

      const [ isLoading, setIsLoading ] = useState(false)
      interface IValuesKontakSaya {
        name: string,
        email: string,
        message: string
      }

      const sendMessage = async(values: IValuesKontakSaya) => {
        try {
          setIsLoading(true)
          await sendMail({ email: values.email, message: values.message, name: values.name })
          toast.success('Mengirim pesan berhasil')
        } catch (err) {
          toast.error('Mengirim pesan gagal')
        } finally {
          setIsLoading(false)
        }
      }
    return {
        sendMessage,
        isLoading
    }
}

export default useSendMessageHook
