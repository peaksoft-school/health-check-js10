import { Button as MuiButton, styled } from '@mui/material'

const Button = ({ children, onClick, disabled, variant, ...others }) => {
   const styles = {
      normal: {
         borderRadius: '8px',
         padding: '10px, 26px',
         border: '1px solid #959595',
         backgroundColor: '#FFFFFF',
         color: '#959595',
         fontStyle: 'normal',
         fontWeight: '500',
         boxShadow: 'none',

         '&:hover': {
            borderRadius: '8px',
            padding: '10px, 26px',
            backgroundColor: ' #F5F5F5',
            color: '#959595',
            fontWeight: '500',
            border: 'none',
            boxShadow: 'none',
         },
         '&:active': {
            borderRadius: '8px',
            padding: '10px, 26px',
            border: 'none',
            backgroundColor: '#F5F5F5',
            color: '#959595',
            fontWeight: '500',
            boxShadow: 'none',
         },
         '&:disabled': {
            borderRadius: '8px',
            padding: '10px, 26px',
            border: 'none',
            backgroundColor: '#F5F5F5',
            color: '#D9D9D9',
            fontWeight: '500',
            boxShadow: 'none',
         },
      },
      outlined: {
         padding: '10px 20px',
         borderRadius: '10px',
         border: '1px solid #048741 ',
         color: '#048741',

         fontWeight: '500',
         boxShadow: 'none',
         backgroundColor: '#FFFFFF',
         '&:hover': {
            padding: '10px 20px',
            background:
               'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
            borderRadius: '10px',
            border: 'none',
            color: '#FFF',
            fontWeight: '500',
            boxShadow: 'none',
         },
         '&:active': {
            padding: '10px 20px',
            background:
               'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
            borderRadius: '10px',
            border: 'none',
            color: '#FFF',
            fontWeight: '500',
            boxShadow: 'none',
         },
         '&:disabled': {
            padding: '10px 20px',
            borderRadius: '10px',
            border: '1px solid #D3D3D3',
            color: '#D3D3D3',

            fontWeight: '500',
            boxShadow: 'none',
         },
      },
      contained: {
         padding: '14px 140px',
         borderRadius: '10px',
         border: 'none',
         background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         color: '#FFF',
         boxShadow: 'none',
         fontWeight: '500',
         '&:hover': {
            padding: '14px 140px',
            borderRadius: '10px',
            border: 'none',
            background:
               'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
            color: '#FFF',

            boxShadow: 'none',
            fontWeight: '500',
         },
         '&:active': {
            padding: '14px 140px',
            borderRadius: '10px',
            border: 'none',
            background:
               ' linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
            color: '#FFF',
            boxShadow: 'none',
            fontWeight: '500',
         },
         '&:disabled': {
            padding: '14px 140px',
            borderRadius: '10px',
            border: 'none',
            background: '#D3D3D3',
            color: '#FFF',
            boxShadow: 'none',
            fontWeight: '500',
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
