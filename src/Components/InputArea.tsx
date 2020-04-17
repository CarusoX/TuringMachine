import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

function InputArea() {
  return (
    <Form>
      <TextArea rows={30} placeholder="Tell us more" />
      <Button color="green" fluid content="Click Here" />
    </Form>
  );
}

export default InputArea;
