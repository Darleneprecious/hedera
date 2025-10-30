import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const EditProfileForm = ({ user, onClose }: any) => {
  const { updateUser } = useAuthContext();
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    profilePic: user.profilePic || "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Profile Image Upload */}
      <div className="flex flex-col items-center gap-2">
        {formData.profilePic ? (
          <img
            src={formData.profilePic}
            alt="preview"
            className="w-20 h-20 rounded-full object-cover border"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white text-2xl font-bold">
            {user.name?.charAt(0)?.toUpperCase() || "?"}
          </div>
        )}
        <label className="cursor-pointer text-green-600 font-medium text-sm">
          Change Photo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Name Input */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="border p-2 rounded-md"
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded-md"
      />

      <button
        type="submit"
        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
