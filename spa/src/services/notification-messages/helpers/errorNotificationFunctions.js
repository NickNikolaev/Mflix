export const emptyField = name => `${name} Should Not Be Empty`;
export const shortLength = (name, min = 6) => `${name} Should Be At Least ${min} Characters`;

export const stringType = name => `${name} Should Be A String`;
export const intType = name => `${name} Should Be An Integer`;
export const floatType = name => `${name} Should Be A Float Integer`;

export const minimalRange = (name, min) => `${name} Should Be Greater Than ${min}`;
export const maximalRange = (name, max) => `${name} Should Be Less Than ${max}`;