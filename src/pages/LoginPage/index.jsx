import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLogin } from "../../components/formSchema";
import { Input } from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const { userLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaLogin),
  });

  const submit = (formData) => {
    userLogin(formData);
  };
  return (
    <section className={styles.Login__page}>
      <Header />
      <main className={styles.main__login}>
        <section>
          <h1 className="title3">Login</h1>

          <form
            onSubmit={handleSubmit(submit)}
            className={styles.form__container}
          >
            <div>
              <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email}
              />
            </div>
            <div>
              <Input
                label="Senha"
                type="password"
                {...register("password")}
                error={errors.password}
              />
            </div>

            <button className={`title3 ${styles.enter_btn}`} type="submit">
              Entrar
            </button>
          </form>
          <p className={styles.message}>Ainda não possui uma conta?</p>
          <Link to="/register">
            <button className={`title3 ${styles.register_btn}`}>
              Cadastre-se
            </button>
          </Link>
        </section>
      </main>
    </section>
  );
};
