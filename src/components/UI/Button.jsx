import { Button as MuiButton, styled } from '@mui/material'

const commonButtonStyles = {
   borderRadius: '8px',
   padding: '10px 26px',
   border: '1px solid #959595',
   backgroundColor: '#FFFFFF',
   color: '#959595',
   fontWeight: '500',
   boxShadow: 'none',
   '&:hover': {
      backgroundColor: '#F5F5F5',
      border: 'none',
   },
   '&:active': {
      border: 'none',
      backgroundColor: '#F5F5F5',
   },
   '&:disabled': {
      border: 'none',
      backgroundColor: '#F5F5F5',
      color: '#D9D9D9',
   },
}

const Button = ({ children, onClick, disabled, variant, ...others }) => {
   const styles = {
      normal: commonButtonStyles,
      outlined: {
         ...commonButtonStyles,
         border: '1px solid #048741',
         color: '#048741',
         '&:hover': {
            background:
               'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
            color: '#FFF',
         },
         '&:active': {
            background:
               'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
            color: '#FFF',
         },
         '&:disabled': {
            border: '1px solid #D3D3D3',
            color: '#D3D3D3',
         },
      },
      contained: {
         ...commonButtonStyles,
         background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         color: '#FFF',
         '&:hover': {
            background:
               'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
         },
         '&:active': {
            background:
               'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         },
         '&:disabled': {
            background: '#D3D3D3',
         },
      },
   }

   const StyledMuiButton = styled(MuiButton)(() => styles[variant])

   return (
      <StyledMuiButton onClick={onClick} disabled={disabled} {...others}>
         {children}
      </StyledMuiButton>
   )
}

export default Button
