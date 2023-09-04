import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name:Yup.string().required(),
    email:Yup.string().email().required(),
    password:Yup.string().min(4).max(10).required(),
})