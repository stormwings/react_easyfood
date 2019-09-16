import React, { FunctionComponent } from 'react';
import useForm from 'react-hook-form';
import './SearchForm.scss';

import Input from '../Input/Input';

interface Props {
  onSubmit: any;
}

const SearchForm: FunctionComponent<Props> = props => {
  const { register, handleSubmit, errors } = useForm();
  const { onSubmit } = props;

  return (
    <form id="search-form" onSubmit={handleSubmit(onSubmit)}>
      <Input name={'query'} bindInput={register} placeholder={'Chocolate Cake'} />
    </form>
  );
};

export default SearchForm;
