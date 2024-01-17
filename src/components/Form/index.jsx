import { forwardRef } from "react";
import { useUserContext } from "../../providers/UserContext";

export const FormUser = forwardRef(({ children,  handleSubmit, className },  ref) => {
  const { userRegister } = useUserContext();

  const submit = (formData) => {
    userRegister(formData);
  };

  return <form className={className} ref={ref} onSubmit={handleSubmit(submit)}>{children}</form>;
});
