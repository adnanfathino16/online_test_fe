import { Button, Select, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import { dataOffice } from "../data";

const AddUser = () => {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("form-elements")} size="xs">
        <GoPersonAdd />
        Add User
      </Button>
      <Modal show={props.openModal === "form-elements"} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-3">
            <h3 className="text-md font-medium text-gray-900 dark:text-white text-center">Add User</h3>
            <div>
              <div className="block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" sizing="sm" type="text" />
            </div>
            <div className="max-w-md" id="select">
              <div className="block">
                <Label htmlFor="office" value="Office" />
              </div>
              <Select id="office" required>
                {dataOffice.map((office) => (
                  <option>{office}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="block">
                <Label htmlFor="phone" value="Phone" />
              </div>
              <TextInput id="phone" sizing="sm" type="telp" />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" sizing="sm" type="email" />
            </div>
            <div className="w-full flex justify-center">
              <Button className="px-5 py-1" size="xs">
                + Add
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUser;
