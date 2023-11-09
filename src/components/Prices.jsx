import React from 'react'
import { styled } from '@mui/material'
import CustomizedAccordions from './UI/Accordion'
import { prices } from '../utils/constants/accordions'

const Prices = () => {
   return (
      <div>
         <StyledAccordions>
            {prices.map((el) => (
               <CustomizedAccordions key={el.id} title={el.title}>
                  <StyledPrice>
                     <div className="prices-data">
                        <h2>{el.data}</h2> <h2>{el.price}com</h2>
                     </div>

                     <p className="description">{el.description}</p>
                     {el.prices.map((item) => (
                        <div className="prices">
                           <h3>{item.data}</h3>
                           <h2>{item.price}com</h2>
                        </div>
                     ))}
                  </StyledPrice>
               </CustomizedAccordions>
            ))}
         </StyledAccordions>
      </div>
   )
}

export default Prices

export const StyledAccordions = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 20px;
   .MuiTypography-root {
      font-family: 'Manrope';
      font-size: 20px;
   }
   .description {
      font-size: 18px;
      margin-top: 1rem;
      margin-bottom: 1rem;
   }
   h3 {
      font-size: 18px;
      font-weight: 575;
   }
   h2 {
      font-weight: 500;
      font-size: 20px;
   }
   .prices-data {
      display: flex;
      justify-content: space-between;
   }
   .prices {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      border-top: 1px solid #e0e2e7;
   }
`

const StyledPrice = styled('div')`
   text-align: left;
`
