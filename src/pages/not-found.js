import { Button, Result } from "antd";
export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button style={{ backgroundColor: "#60ac5d", color: "white" }} href="/">
          Back Home
        </Button>
      }
    />
  );
};
