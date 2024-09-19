"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schemas/register.schemas";
import { registerUser } from "@/src/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log("inside data", userData);
    registerUser(userData);
  };
  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          defaultValues={{
            name: "Anamul Haque",
            email: "anamul@gmail.com",
            mobileNumber: "01800000000",
            password: "123456",
          }}
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="name" label="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput name="email" label="Email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput name="mobileNumber" label="Mobile Number" size="sm" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" size="sm" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>

        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
