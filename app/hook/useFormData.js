'use client'

import { useState } from 'react';

export function useFormData(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return [formData, handleChange, setFormData];
}
