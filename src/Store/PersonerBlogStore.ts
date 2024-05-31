import { create } from "zustand";
import PersonerBlogInterface from "../Interface/PersonerBlog/PersonerBlogInterface";

interface PersonerBlogStore {
    PersonerBlogData : PersonerBlogInterface|null
    setPersonerBlogData: (data:PersonerBlogInterface) => void;
    resetPersonerBlogData: () => void;
};

const PersonerBlogStore = create<PersonerBlogStore>((set) => ({
    PersonerBlogData : null,
    setPersonerBlogData: (data) => set({ PersonerBlogData : data }),
    resetPersonerBlogData: () => set({ PersonerBlogData : null }),
}));

export default PersonerBlogStore;
