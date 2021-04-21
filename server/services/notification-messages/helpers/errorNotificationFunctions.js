const emptyField = name => `${name} Should Not Be Empty`;
const shortLength = (name, min = 6) => `${name} Should Be At Least ${min} Characters`;

const stringType = name => `${name} Should Be A String`;
const intType = name => `${name} Should Be An Integer`;
const floatType = name => `${name} Should Be A Float Integer`;

const minimalRange = (name, min) => `${name} Should Be Greater Than ${min}`;
const maximalRange = (name, max) => `${name} Should Be Less Than ${max}`;

module.exports = {
    emptyField,
    shortLength,
    stringType,
    intType,
    floatType,
    minimalRange,
    maximalRange
};