import toast from "react-hot-toast";

const useDeleteMessage = () => {
    const deleteMessage = async (id) => {
        try {
            const res = await fetch(`/api/messages/delete/${id}`)
            const data = await res.json();
            if (data.error) throw new Error(data.error)
            toast.success(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return { deleteMessage }
}

export default useDeleteMessage;