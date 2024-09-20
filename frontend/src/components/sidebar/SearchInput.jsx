import { IoSearchSharp } from "react-icons/io5";
import React, { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <label className="relative input w-full input-bordered flex items-center border border-gray-400 bg-gray-200 overflow-hidden">
        <input
          type="text"
          placeholder="Find your chat"
          className="w-full text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 btn border-none bg-transparent text-base hover:bg-transparent hover:text-blue-500"
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </label>
    </form>
  );
};
export default SearchInput;
