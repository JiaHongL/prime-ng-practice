import { chain, Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';
import { normalize } from 'path';

export function loginForm2(options: any): Rule {
  return () => {
    const componentPath = normalize(options.folderPath);
    return chain([
      () => buildComponent({ ...options, path: componentPath, skipImport: true }) as any,
    ]);
  };
}
