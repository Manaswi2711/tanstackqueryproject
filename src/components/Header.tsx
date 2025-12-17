import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    < div className='flex gap-10 p-5 bg-gray-200'>
          <Link to="/"><h1 className='text-3xl'>Home</h1> </Link> 
          <Link to="/Counter"><h1 className='text-3xl'>Counter</h1> </Link>
          <Link to="/Todolist"><h1 className='text-3xl'>Todolist</h1> </Link>
          <Link to="/Products"><h1 className='text-3xl'>Products</h1> </Link>
    </div>
  )
}
