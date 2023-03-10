import * as React from "react";
import { useState } from "react";

export const useForm = <V extends Record<string, any>>(initialValues?: V) => {
  const [values, setValues] = useState<V | {}>(initialValues || {});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return {
    values: values as V,
    onChange,
  };
};
