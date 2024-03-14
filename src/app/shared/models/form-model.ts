export class FormModel {
     public formErrors: any = {
          login: {
               userName: null,
               password: null
          },

          bankAccountForm: {
               name: null,
               age: null,
               address: {
                    address1: null,
                    address2: null
               },
               fields: {
                    field1: null,
                    field2: null
               }
          },
          signupForm: {
               firstName: null,
               lastName: null,
               email: null,
               password: null,
               confirmPassword: null,
               phone: null
          },
          studentInfo: {
               firstName: null,
               lastName: null,
               age: null,
               email: null,
               contact: null,
               address: null,
               studentAddress: {
                    pAddress: null,
                    pinCode: null,
                    street: null,
                    distric: null,
                    state: null,
                    country: null,
                    fName: null,
                    fContact: null,
                    fOccupoation: null,
                    fEmail: null,
                    mName: null,
                    mContact: null,
                    mOccupation: null,
                    mEmail: null
               },
               collegeDetails: {
                    collegeName: null,
                    collegeCampus: null,
                    collegeArea: null,
                    principleName: null,
                    principleEmail: null,
                    totalClass: null,
                    totalProfessor: null,
                    totalLab: null
               },
               idCard: {
                    sName: null,
                    course: null,
                    department: null,
                    batch: null,
                    bloodGroup: null,
                    pContact: null,
                    idAddress: null,
                    hallTicket: null
               }
          }
     };

     public validationMessage: any = {
          login: {
               userName: {
                    required: 'Username is required.',
                    email: 'Enter valid email '
               },
               password: {
                    required: 'Password is required.',
                    minlength: 'Password must should be 8 character in length',
                    maxlength: 'Password should not exceed 16 character in length',
                    pattern: 'Password is not matching the criteria.'
               }
          },
          signupForm: {
               firstName: {
                    required: 'First name is required.'
               },
               lastName: {
                    required: 'Last name is required.'
               },
               email: {
                    required: 'Email is required.',
                    email: 'Enter valid email'
               },
               phone: {
                    required: 'Phone is required.',
                    minlength: 'Phone number must should be 10 character in length',
                    maxlength: 'phone number not exceed 10 character in length'
               },
               password: {
                    required: 'Password is required.',
                    minlength: 'Password must should be 8 character in length',
                    maxlength: 'Password should not exceed 16 character in length'
               },
               confirmPassword: {
                    required: 'Password is required.',
                    minlength: 'Password must should be 8 character in length',
                    maxlength: 'Password should not exceed 16 character in length'
               }
          },
          bankAccountForm: {
               name: {
                    required: 'Username is required.'
               },
               age: {
                    required: 'Password is required.',
                    minlength: 'Password must should be 8 character in length',
                    maxlength: 'Password should not exceed 16 character in length'
               },
               address: {
                    address1: {
                         required: 'Address 1 is required'
                    },
                    address2: {
                         required: 'Address 2 is required'
                    }
               },
               fields: {
                    field1: {
                         required: 'Field 1 is required'
                    },
                    field2: {
                         required: 'Field 2 is required'
                    }
               }
          },
          studentInfo: {
               firstName: {
                    required: 'First name is required.'
               },
               lastName: {
                    required: 'Last name is required.'
               },
               email: {
                    required: 'Email is required',
                    email: 'Enter valid email.'
               },
               age: {
                    required: 'Age is required'
               },
               contact: {
                    required: 'Contact is required'
               },
               address: {
                    required: 'Address is required'
               },

               studentAddress: {
                    pAddress: {
                         required: 'Permanenet address is required'
                    },
                    pinCode: {
                         required: 'Pincode is required'
                    },
                    street: {
                         required: 'Street is required'
                    },
                    distric: {
                         required: 'Street is required'
                    },
                    state: { required: 'State is required' },
                    country: {
                         required: 'Contry is required'
                    },
                    fName: {
                         required: 'Father name is required'
                    },
                    fContact: {
                         required: 'Father contact is required'
                    },
                    fOccupoation: {
                         required: 'Father occupation is required'
                    },
                    fEmail: {
                         required: 'Father email is required'
                    },
                    mName: {
                         required: 'Mother name is required'
                    },
                    mContact: {
                         required: 'Mother contact is required'
                    },
                    mOccupation: {
                         required: 'Mother occupation is required'
                    },
                    mEmail: {
                         required: 'Mother email is required',
                         email: 'Enter valid email'
                    }
               },
               collegeDetails: {
                    collegeName: {
                         required: 'College name is required'
                    },
                    collegeCampus: {
                         required: 'College campus is required'
                    },
                    collegeArea: {
                         required: 'College area is required'
                    },
                    principleName: {
                         required: 'Principle name is required'
                    },
                    principleEmail: {
                         required: 'Principle email is required',
                         email: 'Enter valid email'
                    },
                    totalClass: {
                         required: 'Total class is required'
                    },
                    totalProfessor: {
                         required: 'Total professor is required'
                    },
                    totalLab: {
                         required: 'Total lab is required'
                    }
               },
               idCard: {
                    sName: {
                         required: 'Student name is required'
                    },
                    course: {
                         required: ' Course is required'
                    },
                    department: {
                         required: ' Departname is required'
                    },
                    batch: {
                         required: 'Batch is required'
                    },
                    bloodGroup: {
                         required: 'Blood-group is required'
                    },
                    pContact: {
                         required: "Parent's contact is required"
                    },
                    idAddress: {
                         required: 'Address is required'
                    },
                    hallTicket: {
                         required: 'Hall-ticket number is required'
                    }
               }
          }
     };
}
