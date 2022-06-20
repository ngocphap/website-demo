
import { Button } from "reactstrap";
const Submit = props => {
  return (
    <>
        <Button className="btn bg-2 px-5 text-end justify-content-end align-items-end"
        >
          {props.nameSubmitPage}
        </Button>
    </>
  );
}
export default Submit;
