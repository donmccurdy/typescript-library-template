import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { myPackage } from 'my-package';

test('my-package', () => {
	strictEqual(myPackage(), true, 'package exists');
});
