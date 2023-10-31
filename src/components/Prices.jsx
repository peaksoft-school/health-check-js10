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
                  <StyledData>
                     <div className="prices-data">
                        <h3>{el.data}</h3> <h2>{el.price}com</h2>
                     </div>

                     <p>{el.description}</p>
                     {el.prices.map((item) => (
                        <div className="prices">
                           <h3>{item.data}</h3>
                           <h2>{item.price}com</h2>
                        </div>
                     ))}
                  </StyledData>
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
   .prices-data {
      display: flex;
      justify-content: space-between;
      h2 {
         font-weight: 500;
      }
   }
   .prices {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #e0e2e7;
      h2 {
         font-weight: 500;
      }
   }
`

const StyledData = styled('div')`
   text-align: left;
   p {
      margin: -20px 0px 40px 0px;
   }
`
