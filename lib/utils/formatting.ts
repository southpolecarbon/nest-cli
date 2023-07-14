import { CaseToCase } from 'case-to-case'

const formatter = new CaseToCase()

export type CaseType = 'kebab' | 'snake' | 'camel' | 'pascal' | 'upper';

/**
 *
 * @param str
 * @param caseType
 * @returns formated string
 * @description normalizes input to supported path and file name format.
 * Changes camelCase strings to kebab-case, replaces spaces with dash and keeps underscores.
 */
export const normalizeToCase = (str: string, caseType: CaseType = 'kebab') => {
  switch (caseType) {
    case 'kebab':
        return normalizeToKebabOrSnakeCase(str);
    case 'snake':
        return normalizeToKebabOrSnakeCase(str);
    case 'camel':
        return formatter.toCamelCase(str);
    case 'pascal':
        return formatter.toPascalCase(str);
    case 'upper':
        return formatter.toUpperCase(str);
    default:
        console.log(`Error! case type ${caseType} is not supported.`)
        return str;

  }
}

export const formatString = (str: string) => {
    return str.split('')
        .reduce((content, char) => {
            if (char === '(' || char === ')' || char === '[' || char === ']') {
                return `${content}\\${char}`;
            }
            return `${content}${char}`;
        }, '')
}



/**
 *
 * @param str
 * @returns formated string
 * @description normalizes input to supported path and file name format.
 * Changes camelCase strings to kebab-case, replaces spaces with dash and keeps underscores.
 */
export function normalizeToKebabOrSnakeCase(str: string) {
  const STRING_DASHERIZE_REGEXP = /\s/g;
  const STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
  return str
    .replace(STRING_DECAMELIZE_REGEXP, '$1-$2')
    .toLowerCase()
    .replace(STRING_DASHERIZE_REGEXP, '-');
}


