import { Button, Select, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { dataOffice, dataUser } from "../data";

const EditUser = ({ name }) => {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };
  const [nameEdit, setNameEdit] = useState("");
  const [officeEdit, setOfficeEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState(0);
  const [emailEdit, setEmailEdit] = useState("");

  const trigger = () => {
    props.setOpenModal("form-elements");
    const user = dataUser.find((u) => u.name === name);
    setNameEdit(user.name);
    setOfficeEdit(user.office);
    setPhoneEdit(user.phone);
    setEmailEdit(user.email);
  };

  return (
    <>
      <Button onClick={trigger} size="xs" color="light">
        Edit
      </Button>
      <Modal show={props.openModal === "form-elements"} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-3">
            <h3 className="text-md font-medium text-gray-900 dark:text-white text-center">Edit User</h3>
            <div>
              <div className="block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" sizing="sm" type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
            </div>
            <div className="max-w-md" id="select">
              <div className="block">
                <Label htmlFor="office" value="Office" />
              </div>
              <Select id="office" value={officeEdit} onChange={(e) => setOfficeEdit(e.target.value)} required>
                {dataOffice.map((office) => (
                  <option>{office}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="block">
                <Label htmlFor="phone" value="Phone" />
              </div>
              <TextInput id="phone" sizing="sm" type="telp" value={phoneEdit} onChange={(e) => setPhoneEdit(e.target.value)} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" sizing="sm" type="email" value={emailEdit} onChange={(e) => setEmailEdit(e.target.value)} />
            </div>
            <div className="w-full flex justify-center">
              <Button type="submit" size="xs" className="px-5">
                Edit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUser;
