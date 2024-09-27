import FXForm from "../form/FXForm";
import FXModal from "./FXModal";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextArea";
import { Button } from "@nextui-org/button";
import { useAddClaimRequest } from "@/src/hooks/claimRequest.hook";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ questions, id }: IProps) => {
  const { mutate: handleClaimRequest, isPending } = useAddClaimRequest();
  const onSubmit = (data: any) => {
    // console.log(data);
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith("answer"))
        .map((answer) => data[answer]),
    };
    console.log(claimRequestData);
    handleClaimRequest(claimRequestData);

    // const something = "description";
    // console.log(data[something]); // aikhane description e je data pass korbo segulu bosbe

    // console.log(
    //   Object.keys(data)
    //     .filter((formElement) => formElement.startsWith("answer"))
    //     .map((answer) => data[answer])
    // );
  };
  return (
    <FXModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea label="Description" name="description" />
        <Button className="w-full block my-2" type="submit" size="lg">
          {isPending ? "Sending..." : "Send"}
        </Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
