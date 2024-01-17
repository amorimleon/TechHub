import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const userId = localStorage.getItem("@userId");

      if (userId) {
        try {
          const { data } = await api.get("/profile");

          setUser(data);

          setTechList(data.techs);

          navigate("/dashboard");
        } catch (error) {
          localStorage.removeItem("@userToken");
          localStorage.removeItem("@userId");
        }
      }
    };

    loadUser();
  }, []);

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);

      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      error &&
        toast.error("Esse email já existe!", {
          position: "top-right",
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);

      setTechList(data.user.techs);
      const token = data.token;
      const userProfile = data.user;

      localStorage.setItem("@userToken", token);
      localStorage.setItem("@userId", userProfile.id);

      setUser(userProfile);
      toast.success("Login relizado", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Email ou senha incorretos", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("@userToken");
    localStorage.removeItem("@userId");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, userRegister, userLogin, logout, techList, setTechList }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
