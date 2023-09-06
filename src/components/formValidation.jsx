import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const userSchema = Yup.object().shape({

    name: Yup.string().required().min(4),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(10).required(),
    phoneNumber: Yup.string()
        .required("required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Enter Complete number +923410536480")
        .max(12, "Enter Phone number +923410536480"),
    country: Yup.string().required("Select City").typeError("Select Country"),
})