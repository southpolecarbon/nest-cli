import { normalizeToCase, formatString, CaseType } from '../../../lib/utils/formatting';
import {SchematicOption} from "../../../lib/schematics";

type TestSuite = {
  description: string;
  input: string;
  caseType: CaseType;
  expected: string;
};

describe('Format strings', () => {

  const tests: TestSuite[] = [
    {
      description: 'From kebap to camel',
      input: 'my-app',
      caseType: 'camel',
      expected: 'myApp',
    },
  ];

  tests.forEach((test) => {
    it(test.description, () => {

      expect(
          normalizeToCase(test.input, test.caseType)
      ).toEqual(
          test.expected
      );
    });
  });

});
