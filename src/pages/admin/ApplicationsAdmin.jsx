import { IconButton, InputAdornment, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { Input } from '../../components/UI/input/Input'
import AppTable from '../../components/UI/AppTable'
import {
   applicationsThunk,
   deleteAsyncThunk,
   fetchStatus,
   searchApplicationByIdAsyncThunk,
} from '../../store/applications/applicationsThunk'
import CheckboxUI from '../../components/UI/Checkbox'
import { AppDeleteIcon, SearchIcon } from '../../assets'

export const ApplicationsAdmin = () => {
   const { applications } = useSelector((state) => state.applications)
   const [searchValue, setSearchValue] = useState('')
   const [selectAll, setSelectAll] = useState(false)
   const [items, setItems] = useState(applications)

   const [debouncedSearchValue] = useDebounce(searchValue, 1000)

   const dispatch = useDispatch()

   useEffect(() => {
      setItems(applications)
   }, [applications])

   useEffect(() => {
      dispatch(applicationsThunk())
   }, [dispatch])

   const handleSearchById = (value) => {
      dispatch(searchApplicationByIdAsyncThunk(value))
   }

   useDebounce(() => {
      handleSearchById(debouncedSearchValue)
   }, 1000)

   useEffect(() => {
      handleSearchById(debouncedSearchValue)
   }, [debouncedSearchValue])

   const handleChange = (event) => {
      setSearchValue(event.target.value)
   }
   const handleDeleteSelected = () => {
      const selectedIds = []
      items.forEach((element) => {
         if (element.checked) {
            selectedIds.push(element.id)
         }
      })
      dispatch(deleteAsyncThunk(selectedIds))
   }

   const handleSelectAllChange = (e) => {
      const newSelectAll = !selectAll
      setSelectAll(newSelectAll)
      const updatedItems = items.map((item) => ({
         ...item,
         checked: e.target.checked,
      }))
      setItems(updatedItems)
   }

   const handleCheckboxChange = (e, data) => {
      const updatedItems = items.map((item) =>
         item.id === data.id ? { ...item, checked: e.target.checked } : item
      )
      setItems(updatedItems)
      const allChecked = updatedItems.every((item) => item.checked)
      setSelectAll(allChecked)
   }

   const handleStatusChange = (e, id) => {
      let status
      applications.map((el) => {
         if (el.id === id) {
            status = e.target.checked
         }
         return el
      })
      dispatch(fetchStatus({ status, id }))
   }

   const handleDelete = (applicationId) => {
      dispatch(deleteAsyncThunk([applicationId]))
   }

   const columns = [
      {
         id: 'checkbox',
         label: (
            <CheckboxUI checked={selectAll} onChange={handleSelectAllChange} />
         ),

         render: (item) => {
            return (
               <th>
                  <CheckboxUI
                     checked={Boolean(item.checked)}
                     onChange={(e) => handleCheckboxChange(e, item)}
                  />
               </th>
            )
         },
      },
      {
         id: 'deleteAll',
         label: (
            <AppDeleteIcon
               className="delete-icon"
               onClick={handleDeleteSelected}
            />
         ),
      },
      { id: 'id', label: '№' },
      { id: 'name', label: 'Имя' },
      { id: 'createdAt', label: 'Дата' },
      { id: 'phoneNumber', label: 'Номер телефона' },
      {
         id: 'processed',
         label: 'Обработан',
         render: (el) => {
            return (
               <th>
                  <CheckboxUI
                     checked={el.processed}
                     onChange={(e) => handleStatusChange(e, el.id)}
                  />
               </th>
            )
         },
      },
      {
         id: 'delete',
         label: 'Действия',
         render: (el) => {
            return (
               <th>
                  <AppDeleteIcon
                     className="delete-icon"
                     onClick={() => handleDelete(el.id)}
                  />
               </th>
            )
         },
      },
   ]
   return (
      <StyledContainerApp>
         <div className="appInput">
            <span>Заявки</span>
            <StyledInput
               type="text"
               placeholder="Поиск"
               value={searchValue}
               onChange={handleChange}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton>
                           <SearchIcon />
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
         </div>
         <div className="table">
            <AppTable columns={columns} data={items} />
         </div>
      </StyledContainerApp>
   )
}

const StyledContainerApp = styled('div')`
   background-color: #f5f5f5;
   padding: 0px 4% 10px 4%;
   height: 100%;
   .delete-icon {
      cursor: pointer;
   }
   .appInput {
      display: flex;
      flex-direction: column;
      gap: 25px;
      span {
         font-size: 22px;
         margin-top: 120px;
      }
   }

   .table {
      background-color: #fff;
      border-radius: 6px;
   }

   .flxDTz {
      margin-top: 1.5rem;
   }

   thead:first-of-type > .css-13wgndv-MuiTableRow-root {
      th:nth-child(-n + 3) {
         label {
            margin: 0;
            text-align: left;
         }
         width: 0%;
         padding: 0;
         text-align: center;
      }
      th:last-of-type {
         width: 10px;
         text-align: end;
         padding-left: 0;
      }
      th:nth-last-child(-n + 2) {
         width: 30px;
         text-align: end;
      }
   }
   .css-15wwp11-MuiTableHead-root {
      &:last-of-type th,
      &:last-of-type > tr > th {
         border-bottom: none;
      }
      thead,
      tr:nth-child(2n + 2) {
         background-color: rgba(245, 245, 245, 0.61);
      }
   }
   .kRczSm .MuiTableCell-root {
      background: none;
   }
   .css-13wgndv-MuiTableRow-root {
      th:first-child {
         padding-left: 27px;
      }
      th:last-of-type {
         width: 10px;
         text-align: end;
         padding-right: 10px;
      }
      th:nth-last-child(-n + 2) {
         width: 30px;
         text-align: end;
         padding-right: 10px;
      }
   }
`
const StyledInput = styled(Input)(() => ({
   '.MuiOutlinedInput-root': {
      borderRadius: '25px',
      width: '43rem',
      height: '2.4rem',
      backgroundColor: '#fff',
   },
   fieldset: {
      border: 'none',
   },
}))
