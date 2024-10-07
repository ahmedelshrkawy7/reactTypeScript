type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let messasge;
  if (props.status === "loading") {
    messasge = "loading";
  } else if (props.status === "success") {
    messasge = "success";
  } else if (props.status === "error") {
    messasge = "error";
  }
  return (
    <div>
      <h2>status {messasge}</h2>
    </div>
  );
};

export default Status;
