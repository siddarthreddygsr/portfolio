'use client';

import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import BusinessCard from './BusinessCard';

// Ensure the Modal component is bound to the document root
Modal.setAppElement('#__next');

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('card') === 'True') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);

  const closeModal = () => {
    setIsOpen(false);
    const newURL = new URL(window.location.href);
    newURL.searchParams.delete('card');
    router.push(newURL.toString());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customStyles: any = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000, // Ensure it's on top of everything
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '0px solid #ccc',
      background: '#00000000',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width: '110%', // Take up most of the screen width
      maxWidth: '600px', // But not more than 600px
      height: '90%',
      maxHeight: '700px'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal} className="bg-white p-2 rounded-full hover:bg-gray-100 float-right">
        <X className="w-6 h-6 text-gray-600" />
      </button>
      <BusinessCard name="Siddarth Reddy" surname="Gurram" phone="+91 9032854903" email="siddarthreddygsr@gmail.com" />
    </Modal>
  );
};

export default CustomModal;

