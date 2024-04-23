
// this is the Avatar code or Details of the person



import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AuthModal from '../../Auth/AuthModal';
import { logout } from '../../../Auth/Action';
import  { useState } from 'react';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function AccountMenu({name}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const setAnchorEl = useState(null);

    const handleCloseUserMenu=(event)=>{
        setAnchorEl(null);
    }
    const handleMyOrder=()=>{
        navigate(`/account/order`)
    }
    const handleLogout=()=>{
        dispatch(logout())
        // handleCloseUserMenu();
      }
   
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
            <Menu.Button> 
              <Avatar
                    className='text-white'
                    style={{ backgroundColor: deepPurple[500], color: 'white', transform: 'translateX(100%)', cursor: 'pointer' }}>{name}
                    {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </Avatar>
            </Menu.Button>

            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item  onClick={handleMyOrder}>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <p>
                                    My Order
                                    </p>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Rewards
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item onClick={handleLogout}>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
