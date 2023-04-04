import * as yup from "yup";

const formContact = yup.object().shape({
  name: yup.string().required("nome obrigatorio"),
  email: yup.string().required("email obrigatorio"),
  telephone: yup.string().required("telefone obrigatorio"),
});

const formContactUpdated = yup.object().shape({
  id: yup.number().required(),
  name: yup.string(),
  email: yup.string(),
  telephone: yup.string(),
});
export { formContact, formContactUpdated };
