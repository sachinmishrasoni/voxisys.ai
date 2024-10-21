import { alpha, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { IoAttach } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineAudio } from "react-icons/ai";
import { useState } from 'react';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); // Update the state when the user types
    };
    return (
        <FormControl variant='outlined' fullWidth sx={{
            '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: 7,
                border: 'none !important',
                backgroundColor: alpha('#0000', 0.1)
            },
            '& .MuiOutlinedInput-root': {
                px: '5px !important',
                py: '10px !important',
                alignItems: 'flex-end'
            },
            '& .MuiOutlinedInput-input': {
                mb: 0.6
            }
        }}>
            <OutlinedInput
                multiline
                maxRows={6}
                placeholder='Message Voxisys.ai'
                value={inputValue}
                onChange={handleInputChange}
                startAdornment={
                    <InputAdornment position='start'>
                        <IconButton>
                            <IoAttach />
                        </IconButton>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position='end' sx={{
                        '& .MuiIconButton-root': {
                            backgroundColor: 'secondary.main',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'secondary.light',
                            }
                        }
                    }}>
                        {inputValue.trim().length === 0 ? (
                            <IconButton>
                                <AiOutlineAudio size={21} />
                            </IconButton>
                        ) : (
                            <IconButton>
                                <FiSend size={21}/>
                            </IconButton>
                        )}
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default SearchBox;