import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"), //* trim use korar fole email er samne ba pisone space pore gele plm hobe nah, kete debe
  password: z.string().trim().min(6, "Password must be at least 6 character"),
});

export default loginValidationSchema;
