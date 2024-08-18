import { Button, Checkbox, Input } from "antd";
import Form from "./lib/Form/index";

const FormApp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      initialValues={{ remember: true, username: 'Yongjun Wang' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please input your name' },
          { max: 6, message: 'Max length is 6' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Save me</Checkbox>
      </Form.Item>

      <Form.Item>
        <div>
          <Button type="primary" htmlType="submit" >
            Login
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormApp;
