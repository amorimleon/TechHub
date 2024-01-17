import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../components/formSchema";
import { Input, Select } from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";
import { FormUser } from "../../components/Form";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <section className={styles.section__register}>
      <Header className={styles.header__register}>
        <Link to="/">
          <button className={styles.back__btn}>Voltar</button>
        </Link>
      </Header>

      <FormUser className={styles.form__container} handleSubmit={handleSubmit}>
        <div className={styles.info__box}>
          <p className="title4">Crie sua conta</p>
          <p className={styles.message}>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          label="Nome"
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
          error={errors.email}
        />

        <Input
          label="Senha"
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
          error={errors.password}
        />

        <Input
          label="Confirmar Senha"
          type="password"
          {...register("confirmPassword")}
          placeholder="Digite aqui sua senha"
          error={errors.confirmPassword}
        />

        <Input
          label="Bio"
          type="text"
          {...register("bio")}
          placeholder="Fale sobre você"
          error={errors.bio}
        />

        <Input
          label="Contato"
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
          error={errors.contact}
        />

        <Select
          label="Selecionar Módulo"
          type="text"
          {...register("course_module")}
          error={errors.course_module}
        >
          <option
            className={styles.options}
            value="Primeiro módulo (Introdução ao Frontend)"
          >
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </Select>

        <button className={styles.register__btn} type="submit">
          Cadastrar
        </button>
      </FormUser>
    </section>
  );
};
