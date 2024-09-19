import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <div className="py-3">
          <Input />
        </div>
        <div className="py-3">
          <Input />
        </div>
        <div className="py-3">
          <Input />
        </div>
        <div className="py-3">
          <Input />
        </div>

        <Button
          className="my-3 w-full rounded-md bg-default-900 text-default"
          size="lg"
          type="submit"
        >
          Registration
        </Button>

        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
