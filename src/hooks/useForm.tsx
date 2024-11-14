import React from 'react';

interface useFormProps {
  type: 'name' | 'email' | 'message' | '';
}

const types = {
  name: {
    regex:
      /^[A-Za-z]+(?:'[A-Za-z]+)*(?:\s[A-Za-z]+(?:'[A-Za-z]+)*)?$/,
    message: 'Please write a valid name, without numbers or other special characters.',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please write a valid email.',
  },

  message: {
    regex: /^[\s\S]*$/,
    message: 'Please write your message.',
  },
};
const useForm = ({ type }: useFormProps) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  };

  function validate(value: string) {
    const typed = type as keyof typeof types;
    if (type === '') return true;
    if (value.length === 0) {
      setError('Fill out the field above.');
      return false;
    } else if (types[typed] && !types[typed].regex.test(value)) {
      setError(types[typed].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
