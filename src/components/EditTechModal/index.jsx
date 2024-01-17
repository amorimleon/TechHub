import { useContext } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = () => {
  const { setUpdateModal, updateTech, editingTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (formData) => {
    updateTech(formData);
  };
  return (
    <>
      <div className={styles.modalOverLay}>
        <div className={styles.modal__box}>
          <div className={styles.modal__header}>
            <h2>
              Tecnologia Detalhes{" "}
              <span onClick={() => setUpdateModal(false)}>X</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit(submit)} className={styles.modal__form}>
            <div>
              <label htmlFor="nome" className="Headline">
                Nome
              </label>
              <input id="nome" type="text" {...register("title")} />
            </div>

            <div>
              <label htmlFor="status" className="Headline">
                Selecionar status
              </label>

              <select
                id="status"
                label="Selecionar status"
                {...register("status")}
              >
                <option className={styles.options} value="Iniciante">
                  Iniciante
                </option>
                <option className={styles.options} value="Intermediário">
                  Intermediário
                </option>
                <option className={styles.options} value="Avançado">
                  Avançado
                </option>
              </select>
            </div>
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      </div>
    </>
  );
};
