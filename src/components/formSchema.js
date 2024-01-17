import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Este campo é obrigatório."),
  email: z.string().min(1, "Este campo é obrigatório.").email("Forneça um email válido"),
  password: z.string().min(8, "É necessário pelo menos oito caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
  confirmPassword: z.string().min(8, "É necessário pelo menos oito caracteres."),
  bio: z.string().min(1, "Este campo é obrigatório."),
  contact: z.string().min(1, "Este campo é obrigatório."),
  course_module: z.string().nonempty("Este campo é obrigatório."),
}).refine(({ password, confirmPassword }) => password === confirmPassword,{
  message:"As senhas não corrrespondem",
  path:["confirmPassword"]
});


export const formSchemaLogin = z.object({
  email: z.string().min(1, "Este campo é obrigatório.").email("Forneça um email válido"),
  password: z.string().min(1,"Este campo é obrigatório.")
})