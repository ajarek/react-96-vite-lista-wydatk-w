import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uuid from 'react-uuid';

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.string().required(),
    category: yup.string().required(),
    id: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        price: '',
        category: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden"  {...register('id') } value={uuid()} />
      <div className='wrapper-input'>
        <label htmlFor='name'>Nazwa wydatku</label>
        <input
          type='text'
          placeholder='Dodaj nazwę'
          autoFocus
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div className='wrapper-input'>
        <label htmlFor='price'>Cena wydatku</label>
        <input
          type='number'
          placeholder='Dodaj cenę'
          step={0.01}
          min={0}
          
          {...register('price')}
        />
        <p>{errors.price?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='category'>Kategoria</label>
        <select
          {...register('category')}
          className='select'
        >
          <option value=''>Wybierz kategorię</option>
          <option value='Spożywka'>Spożywka</option>
          <option value='Rozrywka'>Rozrywka</option>
          <option value='AGD'>AGD</option>
          <option value='Opłaty'>Opłaty</option>
          <option value='Media'>Media</option>
          <option value='Inne'>Inne</option>
        </select>
        <p>{errors?.category?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='Dodaj wydatki'
        />
      </div>
    </form>
  )
}
