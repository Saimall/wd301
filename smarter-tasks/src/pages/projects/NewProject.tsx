/* eslint-disable react/react-in-jsx-scope */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { API_ENDPOINT } from '../../config/constants';
const NewProject = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const openModal = () => {
    setIsOpen(true)
  }

// Then we add the closeModal function
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    // The event.preventDefault() will prevent the page to refresh on form submission
    const token = localStorage.getItem("authToken") ?? "";
  try{
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'POST',
  
      // And I'll pass the token as Bearer token in the Authorization header
  
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
      // Finally I'll pass the project name, as name attribute (as per the API doc).
  
      body: JSON.stringify({ name: name }),
    });
    if(!response.ok){
      throw new Error('Failed to create project|||');
    }
    const data = await response.json();
    console.log(data)
  }catch(error){
    console.log(error)
  }

    event.preventDefault();
    console.log("Form submitted");
    console.log("Project name:", name);
  }

    return (
        <>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          New Project
        </button>

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new project
                  </Dialog.Title>
                  <div className="mt-2">
      <form onSubmit={handleSubmit}>
      <input type="text" required placeholder='Enter project name...' autoFocus name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
    Submit
  </button>
  <button type="submit" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
    Cancel
  </button>
      </form>
    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> 
      
        
        </>
      )
    }
    export default NewProject;