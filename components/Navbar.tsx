"use client";
import { Dialog, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItem from "./MenuItem";

import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    console.log("tetiklendim");
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  return (
    <nav className="relative max-w-container mx-auto h-10 flex items-center mt-10 justify-center md:justify-between">
      <MenuItem
        label="Home"
        icon="home"
        path="/"
        status={pathname === "/" ? "active" : "inactive"}
      />
      <MenuItem
        withTag
        label="Collective"
        icon="collective"
        path="/collective"
        status={pathname === "/collective" ? "active" : "inactive"}
      />
      <img src="/logo.png" />
      <MenuItem
        withTag
        label="Analytics"
        icon="analytics"
        path="/analytics"
        status={pathname === "/analytics" ? "active" : "inactive"}
      />
      <MenuItem
        label="Feed"
        icon="feed"
        path="/feed"
        status={pathname === "/feed" ? "active" : "inactive"}
      />
      <button onClick={openModal} className="md:hidden absolute left-3">
        <GiHamburgerMenu className="text-xl" />
      </button>

      {/* Modal */}
      <Transition appear show={showModal} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark1 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-col gap-4">
                    <button onClick={closeModal}>
                      <MenuItem
                        forModal
                        label="Home"
                        icon="home"
                        path="/"
                        status={pathname === "/" ? "active" : "inactive"}
                      />
                    </button>
                    <button onClick={closeModal}>
                      <MenuItem
                        forModal
                        label="Collective"
                        icon="collective"
                        path="/collective"
                        status={
                          pathname === "/collective" ? "active" : "inactive"
                        }
                      />
                    </button>
                    <button onClick={closeModal}>
                      <MenuItem
                        forModal
                        label="Analytics"
                        icon="analytics"
                        path="/analytics"
                        status={
                          pathname === "/analytics" ? "active" : "inactive"
                        }
                      />
                    </button>
                    <button onClick={closeModal}>
                      <MenuItem
                        forModal
                        label="Feed"
                        icon="feed"
                        path="/feed"
                        status={pathname === "/feed" ? "active" : "inactive"}
                      />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default Navbar;
