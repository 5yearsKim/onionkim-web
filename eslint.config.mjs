import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';

export default tsEslint.config(
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      // 2-space indent; tweak options as you like
      indent: ['warn', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
      }],
      '@typescript-eslint/no-explicit-any': 'off', 
    },
  },

  // Indentation for JSX/TSX
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: eslintReact },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-indent': ['warn', 2],        // or 4
      'react/jsx-indent-props': ['warn', 2],  // or 4
    },
  },

);

