import * as Yup from 'yup'

export const contactMeValidationSchema = Yup.object().shape({
    name: Yup.string().required('Form nama harap diisi!').min(3, 'Minimum 3 karakter').max(25, 'Maximum 25 karakter'),
    email: Yup.string().required('Form email harap diisi!').email('Alamat email tidak valid!').max(25, 'Maximum 25 karakter'),
    message: Yup.string().required('Form pesan harap diisi!').min(10, 'Minimum 10 karakter')
})