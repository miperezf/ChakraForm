import { z } from "zod";

export const userSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Ingrese email" })
    .email({ message: "Este no es un email válido" }),
  password: z
    .string()
    .min(1, { message: "Ingrese Contraseña" })
    .min(3, { message: "Longitud minima 3" }),
});

export type userForm = z.infer<typeof userSchema>;
