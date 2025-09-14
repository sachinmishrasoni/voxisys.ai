import { Divider, IconButton, Stack, Typography } from '@mui/material';
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { motion } from 'framer-motion';
import Infotip from '../../../Components/Common/Tooltip';

const items = [
    { label: 'Google', icon: <FaGoogle size={20} /> },
    { label: 'Microsoft', icon: <FaMicrosoft size={20} /> },
    { label: 'Apple', icon: <FaApple size={20} /> },
];

const ThirdParty = () => {
    return (
        <>
            <Divider sx={{
                width: '100%',
                borderColor: (theme) => theme.palette.text.secondary, // Change border color for visibility
            }}>
                <Typography >OR</Typography>
                {/* <Chip label="OR" size='small' sx={{ px: 2, userSelect: 'none' }} /> */}
            </Divider>
            <Stack direction={'row'} gap={1}>
                {
                    items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring', bounce: 0.5, delay: (index+1) * 0.2, ease: 'easeInOut' }}
                        >
                            <Infotip key={index} title={<span>{item.label}</span>}>
                                <IconButton sx={{ border: '1px solid' }} size='large' color='primary'>
                                    {item.icon}
                                </IconButton>
                            </Infotip>
                        </motion.div>
                    ))
                }
            </Stack>
        </>
    )
}

export default ThirdParty