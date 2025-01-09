export enum ErrorMessage{
    onlyAlphabets ="please enter only Alphabets",
    onlyDigits = "please enter only Digits",
    validPhoneNum = "Please enter valid Phone Number"
}

export enum regularExpressionOfMeerjavali{
    description="This input field checks whether you enter a valid group of alphabets as name input. any thing other than alphabet in input text gives user a error",
    syntax="/^[A-Za-z]+$/"
}

export enum regexOfPhoneNumber{
    description="This input field checks whether you enter a valid group of digits as Phone Number input. Anything other than digit in input field gives user a error",
    syntax="/^[0-9]{10}$/ "
}