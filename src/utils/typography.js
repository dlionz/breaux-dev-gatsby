import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'
import CodePlugin from 'typography-plugin-code'

sutroTheme.overrideThemeStyles = () => {
  return {
    "a": {
      color: '#007acc',
    },
  }
}

sutroTheme.plugins = [
  new CodePlugin(),
]

const typography = new Typography(sutroTheme)

export const { scale, rhythm, options } = typography
export default typography