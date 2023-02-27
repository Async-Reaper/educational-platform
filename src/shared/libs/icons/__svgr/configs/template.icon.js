function defaultTemplate({ template }, opts, { componentName, jsx }) {
  const plugins = ['jsx', 'typescript']

  const typeScriptTpl = template.smart({ plugins })

  const _componentName = {
    type: 'Identifier',
    name: componentName.name.replace('Svg', '') + 'Icon'
  }

  return typeScriptTpl.ast`
    import * as React from 'react';
    import { SVGAttributes } from 'react';
    ${'\n'}

    export const ${_componentName} = React.memo(({size = 24, color = '#4E5361', ...props}: SVGAttributes<SVGElement> & {size?: number}) => {
      return ${jsx};
    });
    
    ${'\n'}
    ${_componentName}.displayName = '${_componentName.name}'
`
}

module.exports = defaultTemplate