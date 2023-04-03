import * as yup from "yup";

const formContact = yup.object().shape({
  name: yup.string().required("nome obrigatorio"),
  email: yup.string().required("email obrigatorio"),
  telephone: yup.string().required("telefone obrigatorio"),
});

export { formContact };
