import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ProductContext } from '../context/ProductContext';

const AddProductPage: React.FC = () => {
  const context = useContext(ProductContext);

  if (!context) return null;

  const initialValues = {
    productName: '',
    quantity: '',
    price: '',
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    quantity: Yup.number().required('Quantity is required').positive(),
    price: Yup.number().required('Price is required').positive(),
  });

  const onSubmit = (values: any, { resetForm }: any) => {
    const newProduct = {
      id: nanoid(10),
      ...values,
    };
    context.addProduct(newProduct);
    resetForm();
  };

  return (
    <div>
      <h1>Add Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label>Product Name</label>
            <Field name="productName" />
            <ErrorMessage name="productName" component="div" />
          </div>
          <div>
            <label>Quantity</label>
            <Field name="quantity" />
            <ErrorMessage name="quantity" component="div" />
          </div>
          <div>
            <label>Price</label>
            <Field name="price" />
            <ErrorMessage name="price" component="div" />
          </div>
          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProductPage;
