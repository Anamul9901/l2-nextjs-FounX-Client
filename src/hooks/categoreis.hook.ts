import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Cateogories";

export const ueGetCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => await getCategories(),
  });
};
