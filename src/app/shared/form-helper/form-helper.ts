export class FormHelper {
     public passwordCriteriaList = [
          {
               fieldName: 'length',
               isValid: false,
               criteria: '8 to 20 Characters'
          },
          {
               fieldName: 'caseFormat',
               isValid: false,
               criteria: 'Upper and lower cases'
          },
          {
               isValid: false,
               fieldName: 'letterCombination',
               criteria: 'Combination of letters and numbers'
          },
          {
               isValid: false,
               fieldName: 'specialCharacter',
               criteria: 'Contain at least 1 special character'
          }
     ];
}
