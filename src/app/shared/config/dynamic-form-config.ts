import { DynamicFormStructure } from '../interfaces/dynamic-form.interface';

export const dynamicFormConfig: DynamicFormStructure[] = [
     {
          type: 'text',
          label: 'Name',
          name: 'name',
          value: '',
          validations: [
               {
                    name: 'required',
                    validator: 'required',
                    message: 'Name is required'
               }
          ]
     },
     {
          type: 'textarea',
          label: 'Description',
          name: 'description',
          value: '',
          validations: [
               {
                    name: 'required',
                    validator: 'required',
                    message: 'Description is required'
               }
          ]
     },
     {
          type: 'number',
          label: 'Age',
          name: 'age',
          value: '',
          validations: []
     },
     {
          type: 'radio',
          label: 'Gender',
          name: 'gender',
          value: true,
          options: [
               { label: 'Male', value: true },
               { label: 'Female', value: false }
          ],
          validations: []
     },
     {
          type: 'select',
          label: 'Country',
          name: 'country',
          value: 1,
          options: [
               { label: 'India', value: 1 },
               { label: 'USA', value: 2 },
               { label: 'Canada', value: 3 }
          ],
          validations: [
               {
                    name: 'required',
                    validator: 'required',
                    message: 'Address is required'
               }
          ]
     }
];
