import { Stack, styled, Chip } from '@mui/material'
import { IoImageOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineCode } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { FaRegChartBar } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { useState } from 'react';

const NewChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
}));

const chipItems = [
  { label: 'Create image', icon: <IoImageOutline size={18} color='orange' /> },
  { label: 'Analyze images', icon: <FiEye size={18} color='blue' /> },
  { label: 'Summarize text', icon: <IoDocumentTextOutline size={18} color='brown' /> },
  { label: 'Code', icon: <AiOutlineCode size={18} color='#38E54D' /> },
  { label: 'Get advice', icon: <IoSchoolOutline size={18} color='#FFB84C' /> },
  { label: 'Make a plan', icon: <GoLightBulb size={18} color='#836FFF' /> },
  { label: 'Analyze data', icon: <FaRegChartBar size={18} color='#7C00FE' /> },
  { label: 'Help me write', icon: <TfiWrite size={18} color='#640D5F' /> },
  { label: 'Create image', icon: <IoImageOutline size={18} color='orange' /> },
  { label: 'Create image', icon: <IoImageOutline size={18} color='#640D5F' /> },
]

const ChipBox = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll); // Toggle the display of all chips
  };
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={1.5}>
      {
        chipItems.slice(0, showAll ? chipItems.length : 4).map((item, index) => (
          <NewChip
            key={index}
            label={item.label}
            variant="outlined"
            icon={item.icon}
            clickable
            sx={{ fontSize: 14 }}
          />
        ))
      }
      {
        !showAll && (
          <NewChip
            variant="outlined"
            label={"More"}
            clickable
            onClick={handleToggleShowAll}
          />
        )
      }
    </Stack>
  )
}

export default ChipBox