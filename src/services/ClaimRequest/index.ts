"use server"
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    // console.log('inside', claimRequest);
    const res = await axiosInstance.post("/claim-request", claimRequest);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
