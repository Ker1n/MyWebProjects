let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate (selector, { 
        rules: rules,
        submitHandler: function (form) { 
            
        }
    })
}