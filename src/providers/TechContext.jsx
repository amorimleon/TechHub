import { createContext, useState } from "react";
import { api } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [registerModal, setregisterModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const token = localStorage.getItem("@userToken");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const {data} = useQuery({queryKey:["tech"],queryFn: async ()=>{
    const { data } = await api.get("/profile");
    return data
  }})

  const client = useQueryClient()

  const revalidate = ()=>{
    client.invalidateQueries({queryKey:["tech"]})
  }

 const registerTech = useMutation({
  mutationFn: async (formData)=>{
    return await api.post("/users/techs/", formData);
    
  },
  onSuccess: revalidate
  
})

  const deleteTech = async (techId) => {
    await api.delete(`/users/techs/${techId}`);

    const newTechList = techList.filter((tech) => tech.id !== techId);
    setTechList(newTechList);
  };
  //
  const updateTech = async (formData) => {
    const { data } = await api.put(`/users/techs/${editingTech.id}`, formData);

    const newTechList = techList.map((tech) => {
      if (tech.id === editingTech.id) {
        return data;
      } else {
        return tech;
      }
    });

    setTechList(newTechList);
    setUpdateModal(false);
  };

  return (
    <TechContext.Provider
      value={{
        registerModal,
        setregisterModal,
        updateModal,
        setUpdateModal,
        registerTech,
        deleteTech,
        updateTech,
        editingTech,
        setEditingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
