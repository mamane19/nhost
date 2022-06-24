import { Link } from 'react-router-dom'

import { Button, ButtonVariant } from '@mantine/core'

const AuthLink: React.FC<{
  icon?: React.ReactNode
  link: string
  color?: string
  children?: React.ReactNode
  variant?: ButtonVariant
}> = ({ icon, color, link, variant, children }) => {
  return (
    <Button
      role="button"
      component={Link}
      fullWidth
      radius="sm"
      variant={variant}
      to={link}
      leftIcon={icon}
      styles={(theme) => ({
        root: {
          backgroundColor: color,
          '&:hover': {
            backgroundColor: color && theme.fn.darken(color, 0.05)
          }
        },

        leftIcon: {
          marginRight: 15
        }
      })}
    >
      {children}
    </Button>
  )
}

export default AuthLink
