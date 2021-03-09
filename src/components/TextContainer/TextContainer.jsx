import TextField from "@material-ui/core/TextField";

const TextContainer = ({ onChange, value }) => {
    return (
        <form noValidate autoComplete="off">
              <TextField onChange={e => onChange(e.target.value)} value={value} id="ANDTitle" label="Enter AND title" />
        </form>
    );
  };

export default TextContainer;