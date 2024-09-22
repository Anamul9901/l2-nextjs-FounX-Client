"use client";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const CratePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  //! useFieldArray er maddome eksathe onk field add kora jabe.(react-hook-from er)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handledFieldAppend = () => {
    append({ name: "questions" });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification question</h1>
            <Button onClick={() => handledFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id}>
              <FXInput name={`questions.${index}.value`} label="Questions" />
            </div>
          ))}

          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CratePost;
