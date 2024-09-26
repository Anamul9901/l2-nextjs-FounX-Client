import FXForm from "../form/FXForm";
import FXModal from "./FXModal";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextArea";
import { Button } from "@nextui-org/button";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ questions, id }: IProps) => {
  const onSubmit = (data) => {
    console.log(data);
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
        <Button  className="w-full block my-2" type="submit" size="lg">Send</Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
