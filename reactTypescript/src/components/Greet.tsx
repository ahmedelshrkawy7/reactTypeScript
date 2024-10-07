type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggesIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.isLoggesIn
          ? ` welcome vishwas! you hava ${messageCount} unread ${props.name}`
          : `welcome guest`}
      </h1>
    </div>
  );
};

export default Greet;
