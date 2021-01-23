import React, {useState} from 'react'
import { Input, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';


const SearchBar = ({search, setSearch}) => (
        <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
        startAdornment={<InputAdornment><Search/></InputAdornment>}
        />
)

export default SearchBar