type containerProps = {
  styles: React.CSSProperties;
};

const Container = (props:containerProps) => {
  return (
    <div>
      <h1 style={props.styles}>this is container component</h1>
    </div>
  );
};

export default Container;
