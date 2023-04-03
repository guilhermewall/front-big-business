import * as yup from "yup";

export const formScheaLogin = yup.object().shape({
  email: yup.string().required("required email").email("incorrect email"),
  password: yup.string().required("required password"),
});

export const formScheaRegister = formScheaLogin.shape({
  name: yup.string().required("nome obrigatorio"),
  cpf: yup.string().required("cpf obrigatorio"),
  telephone: yup.string().required("telefone obrigatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
